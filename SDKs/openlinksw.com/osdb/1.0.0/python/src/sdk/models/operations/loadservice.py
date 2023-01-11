import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errormodel as shared_errormodel


@dataclass_json
@dataclasses.dataclass
class LoadServiceRequestBody:
    service_description_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_description_url') }})
    service_moniker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_moniker') }})
    
class LoadService200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class LoadService200ApplicationJSON:
    api: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: LoadService200ApplicationJSONStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class LoadServiceRequest:
    request: Optional[LoadServiceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class LoadServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    load_service_200_application_json_object: Optional[LoadService200ApplicationJSON] = dataclasses.field(default=None)
    
