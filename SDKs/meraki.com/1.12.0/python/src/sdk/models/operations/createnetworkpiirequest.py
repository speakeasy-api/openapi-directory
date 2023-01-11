import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkPiiRequestPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkPiiRequestRequestBodyTypeEnum(str, Enum):
    DELETE = "delete"
    RESTRICT_PROCESSING = "restrict processing"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkPiiRequestRequestBody:
    datasets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    mac: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    sm_device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smDeviceId') }})
    sm_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smUserId') }})
    type: Optional[CreateNetworkPiiRequestRequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclasses.dataclass
class CreateNetworkPiiRequestRequest:
    path_params: CreateNetworkPiiRequestPathParams = dataclasses.field()
    request: Optional[CreateNetworkPiiRequestRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkPiiRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_pii_request_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
