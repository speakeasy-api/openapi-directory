import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conferenceparametersaddonparameters as shared_conferenceparametersaddonparameters


@dataclass_json
@dataclasses.dataclass
class ConferenceParameters:
    add_on_parameters: Optional[shared_conferenceparametersaddonparameters.ConferenceParametersAddOnParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOnParameters') }})
    
