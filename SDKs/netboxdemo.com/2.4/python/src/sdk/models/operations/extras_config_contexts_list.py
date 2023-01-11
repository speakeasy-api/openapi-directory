import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configcontext as shared_configcontext


@dataclasses.dataclass
class ExtrasConfigContextsListQueryParams:
    is_active: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_active', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    platform_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platform_id', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role_id', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group', 'style': 'form', 'explode': True }})
    tenant_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ExtrasConfigContextsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_configcontext.ConfigContext] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ExtrasConfigContextsListRequest:
    query_params: ExtrasConfigContextsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasConfigContextsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    extras_config_contexts_list_200_application_json_object: Optional[ExtrasConfigContextsList200ApplicationJSON] = dataclasses.field(default=None)
    
