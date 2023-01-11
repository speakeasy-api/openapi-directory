import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import controllers_packageitem as shared_controllers_packageitem

class ExportPackagesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    SYSTEMS_INSTALLED = "systems_installed"
    SYSTEMS_UPDATABLE = "systems_updatable"


@dataclasses.dataclass
class ExportPackagesQueryParams:
    filter_name_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_systems_installed_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_installed]', 'style': 'form', 'explode': True }})
    filter_systems_updatable_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_updatable]', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ExportPackagesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportPackagesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportPackagesRequest:
    query_params: ExportPackagesQueryParams = dataclasses.field()
    security: ExportPackagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportPackagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    controllers_package_items: Optional[list[shared_controllers_packageitem.ControllersPackageItem]] = dataclasses.field(default=None)
    
