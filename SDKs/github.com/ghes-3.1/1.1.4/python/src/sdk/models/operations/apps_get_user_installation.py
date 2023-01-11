import dataclasses
from typing import Optional
from ..shared import installation as shared_installation


@dataclasses.dataclass
class AppsGetUserInstallationPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetUserInstallationRequest:
    path_params: AppsGetUserInstallationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetUserInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    installation: Optional[shared_installation.Installation] = dataclasses.field(default=None)
    
