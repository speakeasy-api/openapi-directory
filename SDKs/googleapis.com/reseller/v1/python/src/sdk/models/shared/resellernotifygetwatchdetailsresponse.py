import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResellernotifyGetwatchdetailsResponse:
    r"""ResellernotifyGetwatchdetailsResponse
    JSON template for resellernotify getwatchdetails response.
    """
    
    service_account_email_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmailAddresses') }})
    topic_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicName') }})
    
