import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import controllers_systemsresponse as shared_controllers_systemsresponse

class ListSystemsSortEnum(str, Enum):
    ID = "id"
    DISPLAY_NAME = "display_name"
    LAST_EVALUATION = "last_evaluation"
    LAST_UPLOAD = "last_upload"
    RHSA_COUNT = "rhsa_count"
    RHBA_COUNT = "rhba_count"
    RHEA_COUNT = "rhea_count"
    OTHER_COUNT = "other_count"
    STALE = "stale"
    PACKAGES_INSTALLED = "packages_installed"
    PACKAGES_UPDATABLE = "packages_updatable"


@dataclasses.dataclass
class ListSystemsQueryParams:
    filter_created_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[created]', 'style': 'form', 'explode': True }})
    filter_culled_timestamp_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[culled_timestamp]', 'style': 'form', 'explode': True }})
    filter_display_name_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[display_name]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_insights_id_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[insights_id]', 'style': 'form', 'explode': True }})
    filter_last_evaluation_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[last_evaluation]', 'style': 'form', 'explode': True }})
    filter_last_upload_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[last_upload]', 'style': 'form', 'explode': True }})
    filter_other_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[other_count]', 'style': 'form', 'explode': True }})
    filter_packages_installed_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[packages_installed]', 'style': 'form', 'explode': True }})
    filter_packages_updatable_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[packages_updatable]', 'style': 'form', 'explode': True }})
    filter_rhba_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[rhba_count]', 'style': 'form', 'explode': True }})
    filter_rhea_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[rhea_count]', 'style': 'form', 'explode': True }})
    filter_rhsa_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[rhsa_count]', 'style': 'form', 'explode': True }})
    filter_stale_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[stale]', 'style': 'form', 'explode': True }})
    filter_stale_timestamp_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[stale_timestamp]', 'style': 'form', 'explode': True }})
    filter_stale_warning_timestamp_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[stale_warning_timestamp]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_sids_in_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListSystemsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSystemsSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListSystemsRequest:
    query_params: ListSystemsQueryParams = dataclasses.field()
    security: ListSystemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListSystemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_systems_response: Optional[shared_controllers_systemsresponse.ControllersSystemsResponse] = dataclasses.field(default=None)
    
