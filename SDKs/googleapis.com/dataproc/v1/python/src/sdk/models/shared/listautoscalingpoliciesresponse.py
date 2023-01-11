import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingpolicy as shared_autoscalingpolicy


@dataclass_json
@dataclasses.dataclass
class ListAutoscalingPoliciesResponse:
    r"""ListAutoscalingPoliciesResponse
    A response to a request to list autoscaling policies in a project.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policies: Optional[list[shared_autoscalingpolicy.AutoscalingPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
