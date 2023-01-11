import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1conversation as shared_googlecloudcontactcenterinsightsv1conversation


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ListConversationsResponse:
    r"""GoogleCloudContactcenterinsightsV1ListConversationsResponse
    The response of listing conversations.
    """
    
    conversations: Optional[list[shared_googlecloudcontactcenterinsightsv1conversation.GoogleCloudContactcenterinsightsV1Conversation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
