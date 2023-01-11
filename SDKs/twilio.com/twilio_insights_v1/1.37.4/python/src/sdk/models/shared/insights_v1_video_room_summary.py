import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import video_room_summary_enum_codec_enum as shared_video_room_summary_enum_codec_enum
from ..shared import video_room_summary_enum_created_method_enum as shared_video_room_summary_enum_created_method_enum
from ..shared import video_room_summary_enum_edge_location_enum as shared_video_room_summary_enum_edge_location_enum
from ..shared import video_room_summary_enum_end_reason_enum as shared_video_room_summary_enum_end_reason_enum
from ..shared import video_room_summary_enum_twilio_realm_enum as shared_video_room_summary_enum_twilio_realm_enum
from ..shared import video_room_summary_enum_processing_state_enum as shared_video_room_summary_enum_processing_state_enum
from ..shared import video_room_summary_enum_room_status_enum as shared_video_room_summary_enum_room_status_enum
from ..shared import video_room_summary_enum_room_type_enum as shared_video_room_summary_enum_room_type_enum

class InsightsV1VideoRoomSummaryStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclasses.dataclass
class InsightsV1VideoRoomSummary:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    codecs: Optional[list[shared_video_room_summary_enum_codec_enum.VideoRoomSummaryEnumCodecEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codecs') }})
    concurrent_participants: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrent_participants') }})
    create_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_method: Optional[shared_video_room_summary_enum_created_method_enum.VideoRoomSummaryEnumCreatedMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_method') }})
    duration_sec: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_sec') }})
    edge_location: Optional[shared_video_room_summary_enum_edge_location_enum.VideoRoomSummaryEnumEdgeLocationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edge_location') }})
    end_reason: Optional[shared_video_room_summary_enum_end_reason_enum.VideoRoomSummaryEnumEndReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_reason') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    max_concurrent_participants: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_concurrent_participants') }})
    max_participants: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_participants') }})
    media_region: Optional[shared_video_room_summary_enum_twilio_realm_enum.VideoRoomSummaryEnumTwilioRealmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_region') }})
    processing_state: Optional[shared_video_room_summary_enum_processing_state_enum.VideoRoomSummaryEnumProcessingStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_state') }})
    recording_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_enabled') }})
    room_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_name') }})
    room_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_sid') }})
    room_status: Optional[shared_video_room_summary_enum_room_status_enum.VideoRoomSummaryEnumRoomStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_status') }})
    room_type: Optional[shared_video_room_summary_enum_room_type_enum.VideoRoomSummaryEnumRoomTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_type') }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback') }})
    status_callback_method: Optional[InsightsV1VideoRoomSummaryStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback_method') }})
    total_participant_duration_sec: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_participant_duration_sec') }})
    total_recording_duration_sec: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_recording_duration_sec') }})
    unique_participant_identities: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_participant_identities') }})
    unique_participants: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_participants') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
