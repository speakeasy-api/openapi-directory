import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stats as shared_stats


@dataclass_json
@dataclasses.dataclass
class Setup:
    qr_ssid_suffix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('qr_ssid_suffix') }})
    setup_state: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setup_state') }})
    ssid_suffix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid_suffix') }})
    stats: shared_stats.Stats = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    tos_accepted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tos_accepted') }})
    
