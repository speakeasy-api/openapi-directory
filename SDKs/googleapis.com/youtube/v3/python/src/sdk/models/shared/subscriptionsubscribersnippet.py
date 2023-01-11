import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thumbnaildetails as shared_thumbnaildetails


@dataclass_json
@dataclasses.dataclass
class SubscriptionSubscriberSnippet:
    r"""SubscriptionSubscriberSnippet
    Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
    """
    
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    thumbnails: Optional[shared_thumbnaildetails.ThumbnailDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
