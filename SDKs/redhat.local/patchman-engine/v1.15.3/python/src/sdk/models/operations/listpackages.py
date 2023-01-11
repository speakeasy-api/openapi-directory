import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import controllers_packagesresponse as shared_controllers_packagesresponse

class ListPackagesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    SYSTEMS_INSTALLED = "systems_installed"
    SYSTEMS_UPDATABLE = "systems_updatable"


@dataclasses.dataclass
class ListPackagesQueryParams:
    filter_name_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_sids_in_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    filter_systems_installed_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_installed]', 'style': 'form', 'explode': True }})
    filter_systems_updatable_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_updatable]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListPackagesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPackagesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListPackagesRequest:
    query_params: ListPackagesQueryParams = dataclasses.field()
    security: ListPackagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPackagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_packages_response: Optional[shared_controllers_packagesresponse.ControllersPackagesResponse] = dataclasses.field(default=None)
    
