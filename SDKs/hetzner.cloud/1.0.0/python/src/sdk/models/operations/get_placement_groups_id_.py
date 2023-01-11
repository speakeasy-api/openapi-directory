import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetPlacementGroupsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclasses.dataclass
class GetPlacementGroupsIDPlacementGroupResponsePlacementGroup:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlacementGroupsIDPlacementGroupResponse:
    placement_group: GetPlacementGroupsIDPlacementGroupResponsePlacementGroup = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    

@dataclasses.dataclass
class GetPlacementGroupsIDRequest:
    path_params: GetPlacementGroupsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlacementGroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    placement_group_response: Optional[GetPlacementGroupsIDPlacementGroupResponse] = dataclasses.field(default=None)
    
