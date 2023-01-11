import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignee as shared_assignee
from ..shared import findingseverity_enum as shared_findingseverity_enum
from ..shared import findingstate_enum as shared_findingstate_enum


@dataclass_json
@dataclasses.dataclass
class FindingBulkUpdateInput:
    ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    assignee: Optional[shared_assignee.Assignee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    severity: Optional[shared_findingseverity_enum.FindingSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    state: Optional[shared_findingstate_enum.FindingStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
