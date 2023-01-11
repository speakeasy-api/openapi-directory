import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capabilities as shared_capabilities


@dataclass_json
@dataclasses.dataclass
class DeviceInfo:
    fourk_blocked: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('4k_blocked') }})
    capabilities: shared_capabilities.Capabilities = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    cloud_device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_device_id') }})
    factory_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factory_country_code') }})
    hotspot_bssid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotspot_bssid') }})
    local_authorization_token_hash: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_authorization_token_hash') }})
    mac_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    manufacturer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('model_name') }})
    product_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_name') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    ssdp_udn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssdp_udn') }})
    uma_client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uma_client_id') }})
    uptime: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uptime') }})
    weave_device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weave_device_id') }})
    
