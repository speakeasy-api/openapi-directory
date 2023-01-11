import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label
from ..shared import label as shared_label


@dataclasses.dataclass
class PatchLabelsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchLabelsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchLabelsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchLabelsIDRequest:
    path_params: PatchLabelsIDPathParams = dataclasses.field()
    request: shared_label.LabelInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchLabelsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    label: Optional[shared_label.Label] = dataclasses.field(default=None)
    patch_labels_id_401_application_json_object: Optional[PatchLabelsID401ApplicationJSON] = dataclasses.field(default=None)
    patch_labels_id_404_application_json_object: Optional[PatchLabelsID404ApplicationJSON] = dataclasses.field(default=None)
    
