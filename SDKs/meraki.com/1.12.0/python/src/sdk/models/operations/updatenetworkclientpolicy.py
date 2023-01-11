import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkClientPolicyPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkClientPolicyRequestBody:
    device_policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    

@dataclasses.dataclass
class UpdateNetworkClientPolicyRequest:
    path_params: UpdateNetworkClientPolicyPathParams = dataclasses.field()
    request: UpdateNetworkClientPolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkClientPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_client_policy_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
