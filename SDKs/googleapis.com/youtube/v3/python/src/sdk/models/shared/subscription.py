import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptioncontentdetails as shared_subscriptioncontentdetails
from ..shared import subscriptionsnippet as shared_subscriptionsnippet
from ..shared import subscriptionsubscribersnippet as shared_subscriptionsubscribersnippet


@dataclass_json
@dataclasses.dataclass
class Subscription:
    r"""Subscription
    A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
    """
    
    content_details: Optional[shared_subscriptioncontentdetails.SubscriptionContentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_subscriptionsnippet.SubscriptionSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    subscriber_snippet: Optional[shared_subscriptionsubscribersnippet.SubscriptionSubscriberSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriberSnippet') }})
    
