import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pre_receive_environment as shared_pre_receive_environment


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody:
    image_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentRequest:
    request: Optional[EnterpriseAdminCreatePreReceiveEnvironmentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_environment: Optional[shared_pre_receive_environment.PreReceiveEnvironment] = dataclasses.field(default=None)
    
