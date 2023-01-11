import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassuredworkloadsv1workload as shared_googlecloudassuredworkloadsv1workload


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse:
    r"""GoogleCloudAssuredworkloadsV1ListWorkloadsResponse
    Response of ListWorkloads endpoint.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workloads: Optional[list[shared_googlecloudassuredworkloadsv1workload.GoogleCloudAssuredworkloadsV1Workload]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloads') }})
    
