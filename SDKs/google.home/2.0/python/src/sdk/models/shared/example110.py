import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connecteddevice as shared_connecteddevice
from ..shared import remotesink as shared_remotesink


@dataclass_json
@dataclasses.dataclass
class Example110:
    audio_mode: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_mode') }})
    connected_devices: list[shared_connecteddevice.ConnectedDevice] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_devices') }})
    connecting_devices: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connecting_devices') }})
    discovery_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovery_enabled') }})
    remote_sink: shared_remotesink.RemoteSink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_sink') }})
    scanning_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanning_enabled') }})
    
