import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clustergroup as shared_clustergroup


@dataclasses.dataclass
class VirtualizationClusterGroupsListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class VirtualizationClusterGroupsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_clustergroup.ClusterGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsListRequest:
    query_params: VirtualizationClusterGroupsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationClusterGroupsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtualization_cluster_groups_list_200_application_json_object: Optional[VirtualizationClusterGroupsList200ApplicationJSON] = dataclasses.field(default=None)
    
