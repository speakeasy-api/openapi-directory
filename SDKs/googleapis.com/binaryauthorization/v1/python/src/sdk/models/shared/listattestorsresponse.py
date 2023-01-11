import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attestor as shared_attestor


@dataclass_json
@dataclasses.dataclass
class ListAttestorsResponse:
    r"""ListAttestorsResponse
    Response message for BinauthzManagementService.ListAttestors.
    """
    
    attestors: Optional[list[shared_attestor.Attestor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestors') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
