import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label
from ..shared import label as shared_label


@dataclass_json
@dataclasses.dataclass
class PostLabels400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLabels401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostLabelsRequest:
    request: shared_label.LabelInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostLabelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    label: Optional[shared_label.Label] = dataclasses.field(default=None)
    post_labels_400_application_json_object: Optional[PostLabels400ApplicationJSON] = dataclasses.field(default=None)
    post_labels_401_application_json_object: Optional[PostLabels401ApplicationJSON] = dataclasses.field(default=None)
    
