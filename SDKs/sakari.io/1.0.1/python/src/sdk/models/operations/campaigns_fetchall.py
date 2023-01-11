import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaignsresponse as shared_campaignsresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CampaignsFetchAllPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CampaignsFetchAllQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CampaignsFetchAllSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CampaignsFetchAllRequest:
    path_params: CampaignsFetchAllPathParams = dataclasses.field()
    query_params: CampaignsFetchAllQueryParams = dataclasses.field()
    security: CampaignsFetchAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CampaignsFetchAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaigns_response: Optional[shared_campaignsresponse.CampaignsResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
