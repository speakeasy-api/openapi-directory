import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import video_participant_summary_enum_codec_enum as shared_video_participant_summary_enum_codec_enum
from ..shared import video_participant_summary_enum_edge_location_enum as shared_video_participant_summary_enum_edge_location_enum
from ..shared import video_participant_summary_enum_twilio_realm_enum as shared_video_participant_summary_enum_twilio_realm_enum
from ..shared import video_participant_summary_enum_room_status_enum as shared_video_participant_summary_enum_room_status_enum


@dataclass_json
@dataclasses.dataclass
class InsightsV1VideoRoomSummaryVideoParticipantSummary:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    codecs: Optional[list[shared_video_participant_summary_enum_codec_enum.VideoParticipantSummaryEnumCodecEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codecs') }})
    duration_sec: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_sec') }})
    edge_location: Optional[shared_video_participant_summary_enum_edge_location_enum.VideoParticipantSummaryEnumEdgeLocationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edge_location') }})
    end_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_reason') }})
    error_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    error_code_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code_url') }})
    join_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    leave_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leave_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    media_region: Optional[shared_video_participant_summary_enum_twilio_realm_enum.VideoParticipantSummaryEnumTwilioRealmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_region') }})
    participant_identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_identity') }})
    participant_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_sid') }})
    properties: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher_info: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_info') }})
    room_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_sid') }})
    status: Optional[shared_video_participant_summary_enum_room_status_enum.VideoParticipantSummaryEnumRoomStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
