import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orgclassification_enum as shared_orgclassification_enum


@dataclass_json
@dataclasses.dataclass
class CurrentRole:
    org_classification: shared_orgclassification_enum.OrgClassificationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_classification') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    district: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    division_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division_id') }})
    
