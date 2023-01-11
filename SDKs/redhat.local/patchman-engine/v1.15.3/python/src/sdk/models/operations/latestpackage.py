import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_packagedetailresponse as shared_controllers_packagedetailresponse


@dataclasses.dataclass
class LatestPackagePathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LatestPackageSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class LatestPackageRequest:
    path_params: LatestPackagePathParams = dataclasses.field()
    security: LatestPackageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LatestPackageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_package_detail_response: Optional[shared_controllers_packagedetailresponse.ControllersPackageDetailResponse] = dataclasses.field(default=None)
    
