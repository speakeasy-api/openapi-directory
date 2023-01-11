import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_systeminlineitem as shared_controllers_systeminlineitem


@dataclasses.dataclass
class ExportAdvisorySystemsPathParams:
    advisory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'advisory_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportAdvisorySystemsQueryParams:
    filter_display_name_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[display_name]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_last_evaluation_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[last_evaluation]', 'style': 'form', 'explode': True }})
    filter_last_upload_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[last_upload]', 'style': 'form', 'explode': True }})
    filter_other_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[other_count]', 'style': 'form', 'explode': True }})
    filter_packages_installed_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[packages_installed]', 'style': 'form', 'explode': True }})
    filter_packages_updatable_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[packages_updatable]', 'style': 'form', 'explode': True }})
    filter_rhba_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[rhba_count]', 'style': 'form', 'explode': True }})
    filter_rhea_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[rhea_count]', 'style': 'form', 'explode': True }})
    filter_rhsa_count_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[rhsa_count]', 'style': 'form', 'explode': True }})
    filter_stale_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[stale]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_sids_in_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportAdvisorySystemsSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportAdvisorySystemsRequest:
    path_params: ExportAdvisorySystemsPathParams = dataclasses.field()
    query_params: ExportAdvisorySystemsQueryParams = dataclasses.field()
    security: ExportAdvisorySystemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportAdvisorySystemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    controllers_system_inline_items: Optional[list[shared_controllers_systeminlineitem.ControllersSystemInlineItem]] = dataclasses.field(default=None)
    
