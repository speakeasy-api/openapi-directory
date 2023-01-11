import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label
from ..shared import label as shared_label


@dataclasses.dataclass
class PutLabelsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutLabelsID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutLabelsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutLabelsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PutLabelsIDRequest:
    path_params: PutLabelsIDPathParams = dataclasses.field()
    request: shared_label.LabelInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutLabelsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    label: Optional[shared_label.Label] = dataclasses.field(default=None)
    put_labels_id_400_application_json_object: Optional[PutLabelsID400ApplicationJSON] = dataclasses.field(default=None)
    put_labels_id_401_application_json_object: Optional[PutLabelsID401ApplicationJSON] = dataclasses.field(default=None)
    put_labels_id_404_application_json_object: Optional[PutLabelsID404ApplicationJSON] = dataclasses.field(default=None)
    
