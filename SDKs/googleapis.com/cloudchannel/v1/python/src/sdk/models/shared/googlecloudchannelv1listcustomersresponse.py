import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1customer as shared_googlecloudchannelv1customer


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListCustomersResponse:
    r"""GoogleCloudChannelV1ListCustomersResponse
    Response message for CloudChannelService.ListCustomers.
    """
    
    customers: Optional[list[shared_googlecloudchannelv1customer.GoogleCloudChannelV1Customer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
