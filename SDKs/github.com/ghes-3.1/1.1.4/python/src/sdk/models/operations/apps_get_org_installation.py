import dataclasses
from typing import Optional
from ..shared import installation as shared_installation


@dataclasses.dataclass
class AppsGetOrgInstallationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetOrgInstallationRequest:
    path_params: AppsGetOrgInstallationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetOrgInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    installation: Optional[shared_installation.Installation] = dataclasses.field(default=None)
    
