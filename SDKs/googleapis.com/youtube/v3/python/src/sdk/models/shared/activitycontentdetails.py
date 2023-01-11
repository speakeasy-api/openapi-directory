import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitycontentdetailsbulletin as shared_activitycontentdetailsbulletin
from ..shared import activitycontentdetailschannelitem as shared_activitycontentdetailschannelitem
from ..shared import activitycontentdetailscomment as shared_activitycontentdetailscomment
from ..shared import activitycontentdetailsfavorite as shared_activitycontentdetailsfavorite
from ..shared import activitycontentdetailslike as shared_activitycontentdetailslike
from ..shared import activitycontentdetailsplaylistitem as shared_activitycontentdetailsplaylistitem
from ..shared import activitycontentdetailspromoteditem as shared_activitycontentdetailspromoteditem
from ..shared import activitycontentdetailsrecommendation as shared_activitycontentdetailsrecommendation
from ..shared import activitycontentdetailssocial as shared_activitycontentdetailssocial
from ..shared import activitycontentdetailssubscription as shared_activitycontentdetailssubscription
from ..shared import activitycontentdetailsupload as shared_activitycontentdetailsupload


@dataclass_json
@dataclasses.dataclass
class ActivityContentDetails:
    r"""ActivityContentDetails
    Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
    """
    
    bulletin: Optional[shared_activitycontentdetailsbulletin.ActivityContentDetailsBulletin] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletin') }})
    channel_item: Optional[shared_activitycontentdetailschannelitem.ActivityContentDetailsChannelItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelItem') }})
    comment: Optional[shared_activitycontentdetailscomment.ActivityContentDetailsComment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    favorite: Optional[shared_activitycontentdetailsfavorite.ActivityContentDetailsFavorite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorite') }})
    like: Optional[shared_activitycontentdetailslike.ActivityContentDetailsLike] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    playlist_item: Optional[shared_activitycontentdetailsplaylistitem.ActivityContentDetailsPlaylistItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistItem') }})
    promoted_item: Optional[shared_activitycontentdetailspromoteditem.ActivityContentDetailsPromotedItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotedItem') }})
    recommendation: Optional[shared_activitycontentdetailsrecommendation.ActivityContentDetailsRecommendation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    social: Optional[shared_activitycontentdetailssocial.ActivityContentDetailsSocial] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social') }})
    subscription: Optional[shared_activitycontentdetailssubscription.ActivityContentDetailsSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    upload: Optional[shared_activitycontentdetailsupload.ActivityContentDetailsUpload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
