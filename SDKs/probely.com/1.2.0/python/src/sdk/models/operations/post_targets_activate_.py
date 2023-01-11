import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostTargetsActivate400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsActivate401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsActivate403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsActivateRequest:
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsActivateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_targets_activate_400_application_json_object: Optional[PostTargetsActivate400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_activate_401_application_json_object: Optional[PostTargetsActivate401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_activate_403_application_json_object: Optional[PostTargetsActivate403ApplicationJSON] = dataclasses.field(default=None)
    target_ids: Optional[list[str]] = dataclasses.field(default=None)
    
