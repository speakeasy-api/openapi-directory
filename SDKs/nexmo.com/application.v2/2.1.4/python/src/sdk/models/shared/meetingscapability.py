import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"


@dataclass_json
@dataclasses.dataclass
class MeetingsCapabilityWebhooksRecordingChanged:
    r"""MeetingsCapabilityWebhooksRecordingChanged
    Vonage will send recording changed events to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    
class MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"


@dataclass_json
@dataclasses.dataclass
class MeetingsCapabilityWebhooksRoomChanged:
    r"""MeetingsCapabilityWebhooksRoomChanged
    Vonage will send call room changed events to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    
class MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"


@dataclass_json
@dataclasses.dataclass
class MeetingsCapabilityWebhooksSessionChanged:
    r"""MeetingsCapabilityWebhooksSessionChanged
    Vonage will send call session changed events to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingsCapabilityWebhooks:
    recording_changed: Optional[MeetingsCapabilityWebhooksRecordingChanged] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_changed') }})
    room_changed: Optional[MeetingsCapabilityWebhooksRoomChanged] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_changed') }})
    session_changed: Optional[MeetingsCapabilityWebhooksSessionChanged] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session_changed') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingsCapability:
    r"""MeetingsCapability
    Meetings related configuration
    """
    
    webhooks: Optional[MeetingsCapabilityWebhooks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
