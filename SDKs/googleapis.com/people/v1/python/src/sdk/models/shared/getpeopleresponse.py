import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import personresponse as shared_personresponse


@dataclass_json
@dataclasses.dataclass
class GetPeopleResponse:
    r"""GetPeopleResponse
    The response to a get request for a list of people by resource name.
    """
    
    responses: Optional[list[shared_personresponse.PersonResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
