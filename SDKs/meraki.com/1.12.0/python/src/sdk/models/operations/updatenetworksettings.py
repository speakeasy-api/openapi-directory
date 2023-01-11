import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSettingsRequestBodySecureConnect:
    r"""UpdateNetworkSettingsRequestBodySecureConnect
    A hash of SecureConnect options applied to the Network.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSettingsRequestBody:
    local_status_page_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localStatusPageEnabled') }})
    remote_status_page_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteStatusPageEnabled') }})
    secure_connect: Optional[UpdateNetworkSettingsRequestBodySecureConnect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureConnect') }})
    

@dataclasses.dataclass
class UpdateNetworkSettingsRequest:
    path_params: UpdateNetworkSettingsPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
