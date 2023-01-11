import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualmachine as shared_virtualmachine


@dataclasses.dataclass
class VirtualizationVirtualMachinesListQueryParams:
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cluster', 'style': 'form', 'explode': True }})
    cluster_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cluster_group', 'style': 'form', 'explode': True }})
    cluster_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cluster_group_id', 'style': 'form', 'explode': True }})
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cluster_id', 'style': 'form', 'explode': True }})
    cluster_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cluster_type', 'style': 'form', 'explode': True }})
    cluster_type_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cluster_type_id', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    platform_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platform_id', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_id: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role_id', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class VirtualizationVirtualMachinesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_virtualmachine.VirtualMachine] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesListRequest:
    query_params: VirtualizationVirtualMachinesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtualization_virtual_machines_list_200_application_json_object: Optional[VirtualizationVirtualMachinesList200ApplicationJSON] = dataclasses.field(default=None)
    
