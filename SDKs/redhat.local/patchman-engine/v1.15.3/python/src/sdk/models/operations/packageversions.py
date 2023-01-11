import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_packageversionsresponse as shared_controllers_packageversionsresponse


@dataclasses.dataclass
class PackageVersionsPathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageVersionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageVersionsSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PackageVersionsRequest:
    path_params: PackageVersionsPathParams = dataclasses.field()
    query_params: PackageVersionsQueryParams = dataclasses.field()
    security: PackageVersionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PackageVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_package_versions_response: Optional[shared_controllers_packageversionsresponse.ControllersPackageVersionsResponse] = dataclasses.field(default=None)
    
