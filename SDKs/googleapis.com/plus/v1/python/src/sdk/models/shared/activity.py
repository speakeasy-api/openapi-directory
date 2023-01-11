import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acl as shared_acl
from ..shared import place as shared_place


@dataclass_json
@dataclasses.dataclass
class ActivityActorClientSpecificActorInfoYoutubeActorInfo:
    r"""ActivityActorClientSpecificActorInfoYoutubeActorInfo
    Actor info specific to YouTube clients.
    """
    
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityActorClientSpecificActorInfo:
    r"""ActivityActorClientSpecificActorInfo
    Actor info specific to particular clients.
    """
    
    youtube_actor_info: Optional[ActivityActorClientSpecificActorInfoYoutubeActorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeActorInfo') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityActorImage:
    r"""ActivityActorImage
    The image representation of the actor.
    """
    
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityActorName:
    r"""ActivityActorName
    An object representation of the individual components of name.
    """
    
    family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityActorVerification:
    r"""ActivityActorVerification
    Verification status of actor.
    """
    
    ad_hoc_verified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adHocVerified') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityActor:
    r"""ActivityActor
    The person who performed this activity.
    """
    
    client_specific_actor_info: Optional[ActivityActorClientSpecificActorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSpecificActorInfo') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[ActivityActorImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    name: Optional[ActivityActorName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[ActivityActorVerification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo:
    r"""ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo
    Actor info specific to YouTube clients.
    """
    
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectActorClientSpecificActorInfo:
    r"""ActivityObjectActorClientSpecificActorInfo
    Actor info specific to particular clients.
    """
    
    youtube_actor_info: Optional[ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeActorInfo') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectActorImage:
    r"""ActivityObjectActorImage
    The image representation of the original actor.
    """
    
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectActorVerification:
    r"""ActivityObjectActorVerification
    Verification status of actor.
    """
    
    ad_hoc_verified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adHocVerified') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectActor:
    r"""ActivityObjectActor
    If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
    """
    
    client_specific_actor_info: Optional[ActivityObjectActorClientSpecificActorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSpecificActorInfo') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[ActivityObjectActorImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[ActivityObjectActorVerification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectAttachmentsEmbed:
    r"""ActivityObjectAttachmentsEmbed
    If the attachment is a video, the embeddable link.
    """
    
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectAttachmentsFullImage:
    r"""ActivityObjectAttachmentsFullImage
    The full image URL for photo attachments.
    """
    
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectAttachmentsImage:
    r"""ActivityObjectAttachmentsImage
    The preview image for photos or videos.
    """
    
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectAttachmentsThumbnailsImage:
    r"""ActivityObjectAttachmentsThumbnailsImage
    Image resource.
    """
    
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectAttachmentsThumbnails:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    image: Optional[ActivityObjectAttachmentsThumbnailsImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectAttachments:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    embed: Optional[ActivityObjectAttachmentsEmbed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    full_image: Optional[ActivityObjectAttachmentsFullImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullImage') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[ActivityObjectAttachmentsImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    object_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    thumbnails: Optional[list[ActivityObjectAttachmentsThumbnails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectPlusoners:
    r"""ActivityObjectPlusoners
    People who +1'd this activity.
    """
    
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectReplies:
    r"""ActivityObjectReplies
    Comments in reply to this activity.
    """
    
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObjectResharers:
    r"""ActivityObjectResharers
    People who reshared this activity.
    """
    
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityObject:
    r"""ActivityObject
    The object of this activity.
    """
    
    actor: Optional[ActivityObjectActor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    attachments: Optional[list[ActivityObjectAttachments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    original_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalContent') }})
    plusoners: Optional[ActivityObjectPlusoners] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusoners') }})
    replies: Optional[ActivityObjectReplies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    resharers: Optional[ActivityObjectResharers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resharers') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityProvider:
    r"""ActivityProvider
    The service provider that initially published this activity.
    """
    
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class Activity:
    access: Optional[shared_acl.ACL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    actor: Optional[ActivityActor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    annotation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    crosspost_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crosspostSource') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    geocode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geocode') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[shared_place.Place] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    object: Optional[ActivityObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    place_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    place_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeName') }})
    provider: Optional[ActivityProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    published: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    radius: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verb') }})
    
