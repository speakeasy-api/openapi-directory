import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import votecount as shared_votecount
from ..shared import organization as shared_organization
from ..shared import link as shared_link
from ..shared import personvote as shared_personvote


@dataclass_json
@dataclasses.dataclass
class VoteEvent:
    counts: list[shared_votecount.VoteCount] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    motion_text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('motion_text') }})
    organization: shared_organization.Organization = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    result: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    sources: list[shared_link.Link] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    start_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    votes: list[shared_personvote.PersonVote] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('votes') }})
    motion_classification: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motion_classification') }})
    
