import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class PostTargetsArchived200ApplicationJSON:
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_total') }})
    pagination_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_count') }})
    results: Optional[list[shared_target.Target]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsArchived400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsArchived401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsArchived403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsArchivedRequest:
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsArchivedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_targets_archived_200_application_json_object: Optional[PostTargetsArchived200ApplicationJSON] = dataclasses.field(default=None)
    post_targets_archived_400_application_json_object: Optional[PostTargetsArchived400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_archived_401_application_json_object: Optional[PostTargetsArchived401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_archived_403_application_json_object: Optional[PostTargetsArchived403ApplicationJSON] = dataclasses.field(default=None)
    
