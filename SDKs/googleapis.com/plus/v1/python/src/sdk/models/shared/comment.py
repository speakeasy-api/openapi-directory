import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CommentActorClientSpecificActorInfoYoutubeActorInfo:
    r"""CommentActorClientSpecificActorInfoYoutubeActorInfo
    Actor info specific to YouTube clients.
    """
    
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentActorClientSpecificActorInfo:
    r"""CommentActorClientSpecificActorInfo
    Actor info specific to particular clients.
    """
    
    youtube_actor_info: Optional[CommentActorClientSpecificActorInfoYoutubeActorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeActorInfo') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentActorImage:
    r"""CommentActorImage
    The image representation of this actor.
    """
    
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentActorVerification:
    r"""CommentActorVerification
    Verification status of actor.
    """
    
    ad_hoc_verified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adHocVerified') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentActor:
    r"""CommentActor
    The person who posted this comment.
    """
    
    client_specific_actor_info: Optional[CommentActorClientSpecificActorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSpecificActorInfo') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[CommentActorImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[CommentActorVerification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentInReplyTo:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentObject:
    r"""CommentObject
    The object of this comment.
    """
    
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    object_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    original_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalContent') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentPlusoners:
    r"""CommentPlusoners
    People who +1'd this comment.
    """
    
    total_items: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclasses.dataclass
class Comment:
    actor: Optional[CommentActor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    in_reply_to: Optional[list[CommentInReplyTo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inReplyTo') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    object: Optional[CommentObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    plusoners: Optional[CommentPlusoners] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusoners') }})
    published: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    verb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verb') }})
    
