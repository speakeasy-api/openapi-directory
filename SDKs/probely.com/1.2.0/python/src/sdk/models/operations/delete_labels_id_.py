import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteLabelsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteLabelsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteLabelsIDRequest:
    path_params: DeleteLabelsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLabelsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_labels_id_401_application_json_object: Optional[DeleteLabelsID401ApplicationJSON] = dataclasses.field(default=None)
    
