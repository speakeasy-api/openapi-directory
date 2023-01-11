import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namematchcandidateout as shared_namematchcandidateout


@dataclass_json
@dataclasses.dataclass
class NameMatchCandidatesOut:
    r"""NameMatchCandidatesOut
    Classified matched names
    """
    
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    match_candidates: Optional[list[shared_namematchcandidateout.NameMatchCandidateOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchCandidates') }})
    order_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderOption') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
