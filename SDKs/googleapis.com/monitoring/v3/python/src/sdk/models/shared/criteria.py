import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Criteria:
    r"""Criteria
    Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied.
    """
    
    policies: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
