import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudessentialcontactsv1contact as shared_googlecloudessentialcontactsv1contact


@dataclass_json
@dataclasses.dataclass
class GoogleCloudEssentialcontactsV1ComputeContactsResponse:
    r"""GoogleCloudEssentialcontactsV1ComputeContactsResponse
    Response message for the ComputeContacts method.
    """
    
    contacts: Optional[list[shared_googlecloudessentialcontactsv1contact.GoogleCloudEssentialcontactsV1Contact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
