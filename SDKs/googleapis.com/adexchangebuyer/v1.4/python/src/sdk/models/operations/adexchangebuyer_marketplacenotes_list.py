import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import getordernotesresponse as shared_getordernotesresponse


@dataclasses.dataclass
class AdexchangebuyerMarketplacenotesListPathParams:
    proposal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacenotesListQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pql_query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pqlQuery', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacenotesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacenotesListRequest:
    path_params: AdexchangebuyerMarketplacenotesListPathParams = dataclasses.field()
    query_params: AdexchangebuyerMarketplacenotesListQueryParams = dataclasses.field()
    security: AdexchangebuyerMarketplacenotesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacenotesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_order_notes_response: Optional[shared_getordernotesresponse.GetOrderNotesResponse] = dataclasses.field(default=None)
    
