import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target
from ..shared import target as shared_target


@dataclasses.dataclass
class PatchTargetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchTargetsIDRequest:
    path_params: PatchTargetsIDPathParams = dataclasses.field()
    request: Optional[shared_target.TargetInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTargetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    target: Optional[shared_target.Target] = dataclasses.field(default=None)
    patch_targets_id_400_application_json_object: Optional[PatchTargetsID400ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_id_401_application_json_object: Optional[PatchTargetsID401ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_id_403_application_json_object: Optional[PatchTargetsID403ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_id_404_application_json_object: Optional[PatchTargetsID404ApplicationJSON] = dataclasses.field(default=None)
    
