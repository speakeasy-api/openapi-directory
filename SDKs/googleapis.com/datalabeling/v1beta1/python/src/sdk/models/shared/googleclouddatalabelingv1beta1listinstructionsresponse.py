import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1instruction as shared_googleclouddatalabelingv1beta1instruction


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListInstructionsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListInstructionsResponse
    Results of listing instructions under a project.
    """
    
    instructions: Optional[list[shared_googleclouddatalabelingv1beta1instruction.GoogleCloudDatalabelingV1beta1Instruction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
