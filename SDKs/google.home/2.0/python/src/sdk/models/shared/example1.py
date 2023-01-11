import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aogh as shared_aogh
from ..shared import audio as shared_audio
from ..shared import buildinfo as shared_buildinfo
from ..shared import detail as shared_detail
from ..shared import deviceinfo as shared_deviceinfo
from ..shared import multizone as shared_multizone
from ..shared import net as shared_net
from ..shared import nightmodeparams as shared_nightmodeparams
from ..shared import opencast as shared_opencast
from ..shared import optin as shared_optin
from ..shared import proxy as shared_proxy
from ..shared import settings as shared_settings
from ..shared import setup as shared_setup
from ..shared import sign as shared_sign
from ..shared import usereq as shared_usereq
from ..shared import wifi as shared_wifi


@dataclass_json
@dataclasses.dataclass
class Example1:
    aogh: shared_aogh.Aogh = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aogh') }})
    audio: shared_audio.Audio = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    build_info: shared_buildinfo.BuildInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_info') }})
    detail: shared_detail.Detail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    device_info: shared_deviceinfo.DeviceInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_info') }})
    multizone: shared_multizone.Multizone = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multizone') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    net: shared_net.Net = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    night_mode_params: shared_nightmodeparams.NightModeParams = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('night_mode_params') }})
    opencast: shared_opencast.Opencast = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opencast') }})
    opt_in: shared_optin.OptIn = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in') }})
    proxy: shared_proxy.Proxy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy') }})
    settings: shared_settings.Settings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    setup: shared_setup.Setup = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setup') }})
    sign: shared_sign.Sign = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign') }})
    user_eq: shared_usereq.UserEq = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_eq') }})
    version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    wifi: shared_wifi.Wifi = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifi') }})
    
