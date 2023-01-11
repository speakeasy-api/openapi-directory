import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namematchcandidatesout as shared_namematchcandidatesout


@dataclass_json
@dataclasses.dataclass
class BatchNameMatchCandidatesOut:
    names_and_match_candidates: Optional[list[shared_namematchcandidatesout.NameMatchCandidatesOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namesAndMatchCandidates') }})
    
