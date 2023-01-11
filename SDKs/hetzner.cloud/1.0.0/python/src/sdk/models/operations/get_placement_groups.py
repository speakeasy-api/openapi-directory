import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetPlacementGroupsSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetPlacementGroupsTypeParameterTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclasses.dataclass
class GetPlacementGroupsQueryParams:
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetPlacementGroupsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[GetPlacementGroupsTypeParameterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlacementGroupsPlacementGroupsResponseMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlacementGroupsPlacementGroupsResponseMeta:
    pagination: GetPlacementGroupsPlacementGroupsResponseMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
class GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclasses.dataclass
class GetPlacementGroupsPlacementGroupsResponsePlacementGroup:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlacementGroupsPlacementGroupsResponse:
    placement_groups: list[GetPlacementGroupsPlacementGroupsResponsePlacementGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_groups') }})
    meta: Optional[GetPlacementGroupsPlacementGroupsResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetPlacementGroupsRequest:
    query_params: GetPlacementGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlacementGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    placement_groups_response: Optional[GetPlacementGroupsPlacementGroupsResponse] = dataclasses.field(default=None)
    
