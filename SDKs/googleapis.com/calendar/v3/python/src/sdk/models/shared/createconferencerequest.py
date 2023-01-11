import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conferencesolutionkey as shared_conferencesolutionkey
from ..shared import conferencerequeststatus as shared_conferencerequeststatus


@dataclass_json
@dataclasses.dataclass
class CreateConferenceRequest:
    conference_solution_key: Optional[shared_conferencesolutionkey.ConferenceSolutionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceSolutionKey') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: Optional[shared_conferencerequeststatus.ConferenceRequestStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
