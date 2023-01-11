import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostTargetsArchive400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsArchive401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsArchive403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsArchiveRequest:
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_targets_archive_400_application_json_object: Optional[PostTargetsArchive400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_archive_401_application_json_object: Optional[PostTargetsArchive401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_archive_403_application_json_object: Optional[PostTargetsArchive403ApplicationJSON] = dataclasses.field(default=None)
    target_ids: Optional[list[str]] = dataclasses.field(default=None)
    
