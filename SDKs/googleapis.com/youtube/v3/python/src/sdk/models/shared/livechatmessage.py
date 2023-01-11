import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import livechatmessageauthordetails as shared_livechatmessageauthordetails
from ..shared import livechatmessagesnippet as shared_livechatmessagesnippet


@dataclass_json
@dataclasses.dataclass
class LiveChatMessage:
    r"""LiveChatMessage
    A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
    """
    
    author_details: Optional[shared_livechatmessageauthordetails.LiveChatMessageAuthorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorDetails') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_livechatmessagesnippet.LiveChatMessageSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
