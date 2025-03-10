"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import composition_enum_format_enum as shared_composition_enum_format_enum
from ..shared import composition_enum_status_enum as shared_composition_enum_status_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Any, Optional

class VideoV1CompositionStatusCallbackMethodEnum(str, Enum):
    r"""The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`."""
    HEAD = 'HEAD'
    GET = 'GET'
    POST = 'POST'
    PATCH = 'PATCH'
    PUT = 'PUT'
    DELETE = 'DELETE'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class VideoV1Composition:
    r"""Created"""
    
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('account_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Composition resource."""  
    audio_sources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audio_sources'), 'exclude': lambda f: f is None }})
    r"""The array of track names to include in the composition. The composition includes all audio sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The track names in this property can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` includes tracks named `student` as well as `studentTeam`."""  
    audio_sources_excluded: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audio_sources_excluded'), 'exclude': lambda f: f is None }})
    r"""The array of track names to exclude from the composition. The composition includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this property can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty."""  
    bitrate: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The average bit rate of the composition's media."""  
    date_completed: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date_completed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time in GMT when the composition's media processing task finished, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format."""  
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format."""  
    date_deleted: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date_deleted'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time in GMT when the composition generated media was deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format."""  
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('duration'), 'exclude': lambda f: f is None }})
    r"""The duration of the composition's media file in seconds."""  
    format: Optional[shared_composition_enum_format_enum.CompositionEnumFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('format'), 'exclude': lambda f: f is None }})  
    links: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('links'), 'exclude': lambda f: f is None }})
    r"""The URL of the media file associated with the composition."""  
    media_external_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('media_external_location'), 'exclude': lambda f: f is None }})
    r"""The URL of the media file associated with the composition when stored externally. See [External S3 Compositions](/docs/video/api/external-s3-compositions) for more details."""  
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resolution'), 'exclude': lambda f: f is None }})
    r"""The dimensions of the video image in pixels expressed as columns (width) and rows (height). The string's format is `{width}x{height}`, such as `640x480`."""  
    room_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('room_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the Group Room that generated the audio and video tracks used in the composition. All media sources included in a composition must belong to the same Group Room."""  
    sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sid'), 'exclude': lambda f: f is None }})
    r"""The unique string that we created to identify the Composition resource."""  
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('size'), 'exclude': lambda f: f is None }})
    r"""The size of the composed media file in bytes."""  
    status: Optional[shared_composition_enum_status_enum.CompositionEnumStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status_callback'), 'exclude': lambda f: f is None }})
    r"""The URL called using the `status_callback_method` to send status information on every composition event."""  
    status_callback_method: Optional[VideoV1CompositionStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status_callback_method'), 'exclude': lambda f: f is None }})
    r"""The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`."""  
    trim: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('trim'), 'exclude': lambda f: f is None }})
    r"""Whether to remove intervals with no media, as specified in the POST request that created the composition. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info."""  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""The absolute URL of the resource."""  
    video_layout: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('video_layout'), 'exclude': lambda f: f is None }})
    r"""An object that describes the video layout of the composition in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info."""  
    