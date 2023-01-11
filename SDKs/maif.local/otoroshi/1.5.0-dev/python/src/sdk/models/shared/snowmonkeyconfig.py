import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chaosconfig as shared_chaosconfig
from ..shared import outagestrategy_enum as shared_outagestrategy_enum


@dataclass_json
@dataclasses.dataclass
class SnowMonkeyConfig:
    r"""SnowMonkeyConfig
    Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
    """
    
    chaos_config: shared_chaosconfig.ChaosConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chaosConfig') }})
    dry_run: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    include_user_facing_descriptors: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUserFacingDescriptors') }})
    outage_duration_from: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outageDurationFrom') }})
    outage_duration_to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outageDurationTo') }})
    outage_strategy: shared_outagestrategy_enum.OutageStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outageStrategy') }})
    start_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    stop_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTime') }})
    target_groups: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroups') }})
    times_per_day: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timesPerDay') }})
    
