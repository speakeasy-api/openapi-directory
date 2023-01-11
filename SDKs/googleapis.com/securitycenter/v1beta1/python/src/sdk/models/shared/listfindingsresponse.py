import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudsecuritycenterv1beta1finding as shared_googlecloudsecuritycenterv1beta1finding


@dataclass_json
@dataclasses.dataclass
class ListFindingsResponse:
    r"""ListFindingsResponse
    Response message for listing findings.
    """
    
    findings: Optional[list[shared_googlecloudsecuritycenterv1beta1finding.GoogleCloudSecuritycenterV1beta1Finding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    read_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
