import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Wifi:
    bssid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bssid') }})
    has_changes: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_changes') }})
    noise_level: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('noise_level') }})
    signal_level: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signal_level') }})
    ssid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    wpa_configured: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_configured') }})
    wpa_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_id') }})
    wpa_state: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_state') }})
    
