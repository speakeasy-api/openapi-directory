import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteKeysIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteKeysID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteKeysID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteKeysIDRequest:
    path_params: DeleteKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_keys_id_401_application_json_object: Optional[DeleteKeysID401ApplicationJSON] = dataclasses.field(default=None)
    delete_keys_id_403_application_json_object: Optional[DeleteKeysID403ApplicationJSON] = dataclasses.field(default=None)
    
