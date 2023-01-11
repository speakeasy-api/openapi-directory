import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_systempackageresponse as shared_controllers_systempackageresponse


@dataclasses.dataclass
class SystemPackagesPathParams:
    inventory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SystemPackagesQueryParams:
    filter_description_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_evra_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[evra]', 'style': 'form', 'explode': True }})
    filter_name_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_updatable_: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[updatable]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SystemPackagesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class SystemPackagesRequest:
    path_params: SystemPackagesPathParams = dataclasses.field()
    query_params: SystemPackagesQueryParams = dataclasses.field()
    security: SystemPackagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SystemPackagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_system_package_response: Optional[shared_controllers_systempackageresponse.ControllersSystemPackageResponse] = dataclasses.field(default=None)
    
