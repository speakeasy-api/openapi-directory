import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutPlacementGroupsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutPlacementGroupsIDUpdatePlacementGroupRequest:
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclasses.dataclass
class PutPlacementGroupsIDPlacementGroupResponsePlacementGroup:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PutPlacementGroupsIDPlacementGroupResponse:
    placement_group: PutPlacementGroupsIDPlacementGroupResponsePlacementGroup = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    

@dataclasses.dataclass
class PutPlacementGroupsIDRequest:
    path_params: PutPlacementGroupsIDPathParams = dataclasses.field()
    request: Optional[PutPlacementGroupsIDUpdatePlacementGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutPlacementGroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    placement_group_response: Optional[PutPlacementGroupsIDPlacementGroupResponse] = dataclasses.field(default=None)
    
