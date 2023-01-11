import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRegistryV2JobIDStatusPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryV2JobIDStatusHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryV2JobIDStatusSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class GetRegistryV2JobIDStatus200ApplicationJSONStatusEnum(str, Enum):
    STARTED = "started"
    COMPLETE = "complete"


@dataclass_json
@dataclasses.dataclass
class GetRegistryV2JobIDStatus200ApplicationJSON:
    percent: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    status: GetRegistryV2JobIDStatus200ApplicationJSONStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2JobIDStatus400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2JobIDStatus401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2JobIDStatus403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2JobIDStatus404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetRegistryV2JobIDStatusRequest:
    headers: GetRegistryV2JobIDStatusHeaders = dataclasses.field()
    path_params: GetRegistryV2JobIDStatusPathParams = dataclasses.field()
    security: GetRegistryV2JobIDStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRegistryV2JobIDStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_registry_v2_job_id_status_200_application_json_object: Optional[GetRegistryV2JobIDStatus200ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_job_id_status_400_application_json_object: Optional[GetRegistryV2JobIDStatus400ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_job_id_status_401_application_json_object: Optional[GetRegistryV2JobIDStatus401ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_job_id_status_403_application_json_object: Optional[GetRegistryV2JobIDStatus403ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_job_id_status_404_application_json_object: Optional[GetRegistryV2JobIDStatus404ApplicationJSON] = dataclasses.field(default=None)
    
