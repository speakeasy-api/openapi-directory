import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api_status_app_version as shared_api_status_app_version


@dataclass_json
@dataclasses.dataclass
class APIStatus:
    android: shared_api_status_app_version.APIStatusAppVersion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('android') }})
    current_season: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_season') }})
    down_events: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('down_events') }})
    ios: shared_api_status_app_version.APIStatusAppVersion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ios') }})
    is_datafeed_down: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_datafeed_down') }})
    max_season: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_season') }})
    
