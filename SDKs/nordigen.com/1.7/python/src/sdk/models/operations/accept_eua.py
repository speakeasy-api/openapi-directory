import dataclasses
from typing import Optional
from ..shared import enduseracceptancedetails as shared_enduseracceptancedetails
from ..shared import enduseragreement as shared_enduseragreement


@dataclasses.dataclass
class AcceptEuaPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AcceptEuaRequests:
    enduser_acceptance_details: Optional[shared_enduseracceptancedetails.EnduserAcceptanceDetails] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    enduser_acceptance_details1: Optional[shared_enduseracceptancedetails.EnduserAcceptanceDetails] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    enduser_acceptance_details2: Optional[shared_enduseracceptancedetails.EnduserAcceptanceDetails] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AcceptEuaRequest:
    path_params: AcceptEuaPathParams = dataclasses.field()
    request: AcceptEuaRequests = dataclasses.field()
    

@dataclasses.dataclass
class AcceptEuaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    end_user_agreement: Optional[shared_enduseragreement.EndUserAgreement] = dataclasses.field(default=None)
    
