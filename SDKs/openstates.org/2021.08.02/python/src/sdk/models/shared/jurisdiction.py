import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jurisdictionclassification_enum as shared_jurisdictionclassification_enum
from ..shared import runplan as shared_runplan
from ..shared import legislativesession as shared_legislativesession
from ..shared import chamber as shared_chamber


@dataclass_json
@dataclasses.dataclass
class Jurisdiction:
    classification: shared_jurisdictionclassification_enum.JurisdictionClassificationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    division_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division_id') }})
    latest_runs: Optional[list[shared_runplan.RunPlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_runs') }})
    legislative_sessions: Optional[list[shared_legislativesession.LegislativeSession]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legislative_sessions') }})
    organizations: Optional[list[shared_chamber.Chamber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    
