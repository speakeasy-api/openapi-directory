import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monitoredresourcedescriptor as shared_monitoredresourcedescriptor


@dataclass_json
@dataclasses.dataclass
class ListMonitoredResourceDescriptorsResponse:
    r"""ListMonitoredResourceDescriptorsResponse
    The ListMonitoredResourceDescriptors response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    resource_descriptors: Optional[list[shared_monitoredresourcedescriptor.MonitoredResourceDescriptor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceDescriptors') }})
    
