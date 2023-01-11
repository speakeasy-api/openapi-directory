import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IdentificationTokenResponse:
    r"""IdentificationTokenResponse
    The identification token to be passed to the Conversations JS API to identify the visitor
    """
    
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
