import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wlt_record as shared_wlt_record


@dataclass_json
@dataclasses.dataclass
class EliminationAllianceBackup:
    r"""EliminationAllianceBackup
    Backup team called in, may be null.
    """
    
    in_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    out: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out') }})
    

@dataclass_json
@dataclasses.dataclass
class EliminationAllianceStatus:
    current_level_record: Optional[shared_wlt_record.WltRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_level_record') }})
    level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    playoff_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff_average') }})
    record: Optional[shared_wlt_record.WltRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class EliminationAlliance:
    picks: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('picks') }})
    backup: Optional[EliminationAllianceBackup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    declines: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declines') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[EliminationAllianceStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
