import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedate as shared_googletypedate


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary:
    r"""GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary
    Summary statistics about the replayed log entries.
    """
    
    difference_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('differenceCount') }})
    error_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCount') }})
    log_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logCount') }})
    newest_date: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newestDate') }})
    oldest_date: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldestDate') }})
    unchanged_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unchangedCount') }})
    
