import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidEapOverridePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey:
    r"""UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey
    EAPOL Key settings.
    """
    
    retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout_in_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMs') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity:
    r"""UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity
    EAP settings for identity requests.
    """
    
    retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBody:
    eapol_key: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eapolKey') }})
    identity: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    max_retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidEapOverrideRequest:
    path_params: UpdateNetworkWirelessSsidEapOverridePathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidEapOverrideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_eap_override_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
