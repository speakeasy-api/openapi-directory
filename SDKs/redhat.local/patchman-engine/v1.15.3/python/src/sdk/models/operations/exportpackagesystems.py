import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_packagesystemitem as shared_controllers_packagesystemitem


@dataclasses.dataclass
class ExportPackageSystemsPathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportPackageSystemsQueryParams:
    filter_system_profile_sap_sids_in_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportPackageSystemsSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportPackageSystemsRequest:
    path_params: ExportPackageSystemsPathParams = dataclasses.field()
    query_params: ExportPackageSystemsQueryParams = dataclasses.field()
    security: ExportPackageSystemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportPackageSystemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_package_system_items: Optional[list[shared_controllers_packagesystemitem.ControllersPackageSystemItem]] = dataclasses.field(default=None)
    
