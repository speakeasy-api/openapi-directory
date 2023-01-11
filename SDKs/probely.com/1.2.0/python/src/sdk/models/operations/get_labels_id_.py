import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label


@dataclasses.dataclass
class GetLabelsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetLabelsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLabelsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetLabelsIDRequest:
    path_params: GetLabelsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLabelsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    label: Optional[shared_label.Label] = dataclasses.field(default=None)
    get_labels_id_401_application_json_object: Optional[GetLabelsID401ApplicationJSON] = dataclasses.field(default=None)
    get_labels_id_404_application_json_object: Optional[GetLabelsID404ApplicationJSON] = dataclasses.field(default=None)
    
