import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PersistenceConfigPersistenceModeEnum(str, Enum):
    PERSISTENCE_MODE_UNSPECIFIED = "PERSISTENCE_MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    RDB = "RDB"

class PersistenceConfigRdbSnapshotPeriodEnum(str, Enum):
    SNAPSHOT_PERIOD_UNSPECIFIED = "SNAPSHOT_PERIOD_UNSPECIFIED"
    ONE_HOUR = "ONE_HOUR"
    SIX_HOURS = "SIX_HOURS"
    TWELVE_HOURS = "TWELVE_HOURS"
    TWENTY_FOUR_HOURS = "TWENTY_FOUR_HOURS"


@dataclass_json
@dataclasses.dataclass
class PersistenceConfigInput:
    r"""PersistenceConfigInput
    Configuration of the persistence functionality.
    """
    
    persistence_mode: Optional[PersistenceConfigPersistenceModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistenceMode') }})
    rdb_snapshot_period: Optional[PersistenceConfigRdbSnapshotPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdbSnapshotPeriod') }})
    rdb_snapshot_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdbSnapshotStartTime') }})
    

@dataclass_json
@dataclasses.dataclass
class PersistenceConfig:
    r"""PersistenceConfig
    Configuration of the persistence functionality.
    """
    
    persistence_mode: Optional[PersistenceConfigPersistenceModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistenceMode') }})
    rdb_next_snapshot_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdbNextSnapshotTime') }})
    rdb_snapshot_period: Optional[PersistenceConfigRdbSnapshotPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdbSnapshotPeriod') }})
    rdb_snapshot_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdbSnapshotStartTime') }})
    
