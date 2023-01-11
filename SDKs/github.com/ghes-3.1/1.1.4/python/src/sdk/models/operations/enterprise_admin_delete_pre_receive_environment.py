import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON:
    errors: Optional[list[EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminDeletePreReceiveEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeletePreReceiveEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_delete_pre_receive_environment_422_application_json_object: Optional[EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON] = dataclasses.field(default=None)
    
