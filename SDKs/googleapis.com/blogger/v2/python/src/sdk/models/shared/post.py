import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comment as shared_comment


@dataclass_json
@dataclasses.dataclass
class PostAuthorImage:
    r"""PostAuthorImage
    The creator's avatar.
    """
    
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAuthor:
    r"""PostAuthor
    The author of this Post.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[PostAuthorImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBlog:
    r"""PostBlog
    Data about the blog containing this Post.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostImages:
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLocation:
    r"""PostLocation
    The location for geotagged posts.
    """
    
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    span: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('span') }})
    
class PostReaderCommentsEnum(str, Enum):
    ALLOW = "ALLOW"
    DONT_ALLOW_SHOW_EXISTING = "DONT_ALLOW_SHOW_EXISTING"
    DONT_ALLOW_HIDE_EXISTING = "DONT_ALLOW_HIDE_EXISTING"


@dataclass_json
@dataclasses.dataclass
class PostReplies:
    r"""PostReplies
    The container of comments on this Post.
    """
    
    items: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    
class PostStatusEnum(str, Enum):
    LIVE = "LIVE"
    DRAFT = "DRAFT"
    SCHEDULED = "SCHEDULED"
    SOFT_TRASHED = "SOFT_TRASHED"


@dataclass_json
@dataclasses.dataclass
class Post:
    author: Optional[PostAuthor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    blog: Optional[PostBlog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    custom_meta_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetaData') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[list[PostImages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[PostLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    published: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    reader_comments: Optional[PostReaderCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readerComments') }})
    replies: Optional[PostReplies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[PostStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleLink') }})
    trashed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashed') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
