import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addorderdealsrequest as shared_addorderdealsrequest
from ..shared import addorderdealsresponse as shared_addorderdealsresponse


@dataclasses.dataclass
class AdexchangebuyerMarketplacedealsInsertPathParams:
    proposal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacedealsInsertQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacedealsInsertSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacedealsInsertRequest:
    path_params: AdexchangebuyerMarketplacedealsInsertPathParams = dataclasses.field()
    query_params: AdexchangebuyerMarketplacedealsInsertQueryParams = dataclasses.field()
    security: AdexchangebuyerMarketplacedealsInsertSecurity = dataclasses.field()
    request: Optional[shared_addorderdealsrequest.AddOrderDealsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AdexchangebuyerMarketplacedealsInsertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_order_deals_response: Optional[shared_addorderdealsresponse.AddOrderDealsResponse] = dataclasses.field(default=None)
    
