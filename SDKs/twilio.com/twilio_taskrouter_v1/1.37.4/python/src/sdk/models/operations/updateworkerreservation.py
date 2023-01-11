import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import worker_reservation_enum_conference_event_enum as shared_worker_reservation_enum_conference_event_enum
from ..shared import worker_reservation_enum_status_enum as shared_worker_reservation_enum_status_enum
from ..shared import worker_reservation_enum_call_status_enum as shared_worker_reservation_enum_call_status_enum
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker_worker_reservation as shared_taskrouter_v1_workspace_worker_worker_reservation


UPDATE_WORKER_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateWorkerReservationPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    worker_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWorkerReservationHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    
class UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateWorkerReservationUpdateWorkerReservationRequest:
    beep: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Beep' }})
    beep_on_customer_entrance: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BeepOnCustomerEntrance' }})
    call_accept: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallAccept' }})
    call_from: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallFrom' }})
    call_record: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallRecord' }})
    call_status_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallStatusCallbackUrl' }})
    call_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallTimeout' }})
    call_to: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallTo' }})
    call_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallUrl' }})
    conference_record: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceRecord' }})
    conference_recording_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallback' }})
    conference_recording_status_callback_method: Optional[UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceRecordingStatusCallbackMethod' }})
    conference_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallback' }})
    conference_status_callback_event: Optional[list[shared_worker_reservation_enum_conference_event_enum.WorkerReservationEnumConferenceEventEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackEvent' }})
    conference_status_callback_method: Optional[UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceStatusCallbackMethod' }})
    conference_trim: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConferenceTrim' }})
    dequeue_from: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DequeueFrom' }})
    dequeue_post_work_activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DequeuePostWorkActivitySid' }})
    dequeue_record: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DequeueRecord' }})
    dequeue_status_callback_event: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DequeueStatusCallbackEvent' }})
    dequeue_status_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DequeueStatusCallbackUrl' }})
    dequeue_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DequeueTimeout' }})
    dequeue_to: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DequeueTo' }})
    early_media: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EarlyMedia' }})
    end_conference_on_customer_exit: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnCustomerExit' }})
    end_conference_on_exit: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnExit' }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'From' }})
    instruction: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Instruction' }})
    max_participants: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxParticipants' }})
    muted: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Muted' }})
    post_work_activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostWorkActivitySid' }})
    record: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Record' }})
    recording_channels: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingChannels' }})
    recording_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallback' }})
    recording_status_callback_method: Optional[UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingStatusCallbackMethod' }})
    redirect_accept: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RedirectAccept' }})
    redirect_call_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RedirectCallSid' }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RedirectUrl' }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Region' }})
    reservation_status: Optional[shared_worker_reservation_enum_status_enum.WorkerReservationEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReservationStatus' }})
    sip_auth_password: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipAuthPassword' }})
    sip_auth_username: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipAuthUsername' }})
    start_conference_on_enter: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StartConferenceOnEnter' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_event: Optional[list[shared_worker_reservation_enum_call_status_enum.WorkerReservationEnumCallStatusEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackEvent' }})
    status_callback_method: Optional[UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'To' }})
    wait_method: Optional[UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WaitMethod' }})
    wait_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WaitUrl' }})
    worker_activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WorkerActivitySid' }})
    

@dataclasses.dataclass
class UpdateWorkerReservationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWorkerReservationRequest:
    headers: UpdateWorkerReservationHeaders = dataclasses.field()
    path_params: UpdateWorkerReservationPathParams = dataclasses.field()
    security: UpdateWorkerReservationSecurity = dataclasses.field()
    request: Optional[UpdateWorkerReservationUpdateWorkerReservationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWorkerReservationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_worker_worker_reservation: Optional[shared_taskrouter_v1_workspace_worker_worker_reservation.TaskrouterV1WorkspaceWorkerWorkerReservation] = dataclasses.field(default=None)
    
