import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountstatusitemlevelissue as shared_accountstatusitemlevelissue
from ..shared import accountstatusstatistics as shared_accountstatusstatistics


@dataclass_json
@dataclasses.dataclass
class AccountStatusProducts:
    channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    item_level_issues: Optional[list[shared_accountstatusitemlevelissue.AccountStatusItemLevelIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemLevelIssues') }})
    statistics: Optional[shared_accountstatusstatistics.AccountStatusStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    
