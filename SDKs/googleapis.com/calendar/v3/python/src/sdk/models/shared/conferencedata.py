import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conferencesolution as shared_conferencesolution
from ..shared import createconferencerequest as shared_createconferencerequest
from ..shared import entrypoint as shared_entrypoint
from ..shared import conferenceparameters as shared_conferenceparameters


@dataclass_json
@dataclasses.dataclass
class ConferenceData:
    conference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceId') }})
    conference_solution: Optional[shared_conferencesolution.ConferenceSolution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceSolution') }})
    create_request: Optional[shared_createconferencerequest.CreateConferenceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createRequest') }})
    entry_points: Optional[list[shared_entrypoint.EntryPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoints') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parameters: Optional[shared_conferenceparameters.ConferenceParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
