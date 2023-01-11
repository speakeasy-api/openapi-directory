import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_packagesystemsresponse as shared_controllers_packagesystemsresponse


@dataclasses.dataclass
class PackageSystemsPathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackageSystemsQueryParams:
    filter_system_profile_sap_sids_in_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackageSystemsSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PackageSystemsRequest:
    path_params: PackageSystemsPathParams = dataclasses.field()
    query_params: PackageSystemsQueryParams = dataclasses.field()
    security: PackageSystemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PackageSystemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_package_systems_response: Optional[shared_controllers_packagesystemsresponse.ControllersPackageSystemsResponse] = dataclasses.field(default=None)
    
