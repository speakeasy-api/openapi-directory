"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import video_v1_room_room_recording_rule as shared_video_v1_room_room_recording_rule
from typing import Optional

FETCH_ROOM_RECORDING_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRoomRecordingRuleSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class FetchRoomRecordingRuleRequest:
    
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    r"""The SID of the Room resource where the recording rules to fetch apply."""  
    

@dataclasses.dataclass
class FetchRoomRecordingRuleResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    video_v1_room_room_recording_rule: Optional[shared_video_v1_room_room_recording_rule.VideoV1RoomRoomRecordingRule] = dataclasses.field(default=None)
    r"""OK"""  
    