import dataclasses
from typing import Optional
from ..shared import clientprofile as shared_clientprofile
from ..shared import error as shared_error


@dataclasses.dataclass
class GetClientProfileForPamPathParams:
    client_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetClientProfileForPamRequest:
    path_params: GetClientProfileForPamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClientProfileForPamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_profile: Optional[shared_clientprofile.ClientProfile] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
