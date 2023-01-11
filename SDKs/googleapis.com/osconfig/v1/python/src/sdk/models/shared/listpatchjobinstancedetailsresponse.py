import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patchjobinstancedetails as shared_patchjobinstancedetails


@dataclass_json
@dataclasses.dataclass
class ListPatchJobInstanceDetailsResponse:
    r"""ListPatchJobInstanceDetailsResponse
    A response message for listing the instances details for a patch job.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    patch_job_instance_details: Optional[list[shared_patchjobinstancedetails.PatchJobInstanceDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchJobInstanceDetails') }})
    
