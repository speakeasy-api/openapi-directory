import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class PostTargets400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargets401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargets403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargets500ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsRequest:
    request: Optional[shared_target.TargetInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    target: Optional[shared_target.Target] = dataclasses.field(default=None)
    post_targets_400_application_json_object: Optional[PostTargets400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_401_application_json_object: Optional[PostTargets401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_403_application_json_object: Optional[PostTargets403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_500_application_json_object: Optional[PostTargets500ApplicationJSON] = dataclasses.field(default=None)
    
