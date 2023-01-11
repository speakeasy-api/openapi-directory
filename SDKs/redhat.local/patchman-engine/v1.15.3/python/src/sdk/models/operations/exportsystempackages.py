import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_systempackageinline as shared_controllers_systempackageinline


@dataclasses.dataclass
class ExportSystemPackagesPathParams:
    inventory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportSystemPackagesQueryParams:
    filter_description_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_evra_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[evra]', 'style': 'form', 'explode': True }})
    filter_name_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_updatable_: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[updatable]', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportSystemPackagesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportSystemPackagesRequest:
    path_params: ExportSystemPackagesPathParams = dataclasses.field()
    query_params: ExportSystemPackagesQueryParams = dataclasses.field()
    security: ExportSystemPackagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportSystemPackagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_system_package_inlines: Optional[list[shared_controllers_systempackageinline.ControllersSystemPackageInline]] = dataclasses.field(default=None)
    
