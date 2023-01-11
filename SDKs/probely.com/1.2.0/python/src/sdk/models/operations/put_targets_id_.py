import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target
from ..shared import target as shared_target


@dataclasses.dataclass
class PutTargetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PutTargetsIDRequest:
    path_params: PutTargetsIDPathParams = dataclasses.field()
    request: Optional[shared_target.TargetInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutTargetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    target: Optional[shared_target.Target] = dataclasses.field(default=None)
    put_targets_id_400_application_json_object: Optional[PutTargetsID400ApplicationJSON] = dataclasses.field(default=None)
    put_targets_id_401_application_json_object: Optional[PutTargetsID401ApplicationJSON] = dataclasses.field(default=None)
    put_targets_id_403_application_json_object: Optional[PutTargetsID403ApplicationJSON] = dataclasses.field(default=None)
    put_targets_id_404_application_json_object: Optional[PutTargetsID404ApplicationJSON] = dataclasses.field(default=None)
    
