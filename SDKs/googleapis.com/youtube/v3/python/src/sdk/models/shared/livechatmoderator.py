import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import livechatmoderatorsnippet as shared_livechatmoderatorsnippet


@dataclass_json
@dataclasses.dataclass
class LiveChatModerator:
    r"""LiveChatModerator
    A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_livechatmoderatorsnippet.LiveChatModeratorSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
