import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnecttoWiFiNetworkRequest:
    bssid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bssid') }})
    enc_passwd: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enc_passwd') }})
    signal_level: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signal_level') }})
    ssid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    wpa_auth: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_auth') }})
    wpa_cipher: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_cipher') }})
    
