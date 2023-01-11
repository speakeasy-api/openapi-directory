import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sms as shared_sms
from ..shared import voice_call as shared_voice_call
from ..shared import in_app_voice as shared_in_app_voice
from ..shared import websocket_call as shared_websocket_call
from ..shared import verify_api as shared_verify_api
from ..shared import number_insight as shared_number_insight
from ..shared import messages as shared_messages
from ..shared import conversations as shared_conversations
from ..shared import asr as shared_asr
from ..shared import sms_response_create_report as shared_sms_response_create_report
from ..shared import voice_call_response_create_report as shared_voice_call_response_create_report
from ..shared import in_app_voice_response_create_report as shared_in_app_voice_response_create_report
from ..shared import websocket_call_response_create_report as shared_websocket_call_response_create_report
from ..shared import verify_api_response_create_report as shared_verify_api_response_create_report
from ..shared import number_insight_response_create_report as shared_number_insight_response_create_report
from ..shared import messages_response_create_report as shared_messages_response_create_report
from ..shared import conversations_response_create_report as shared_conversations_response_create_report
from ..shared import asr_response_create_report as shared_asr_response_create_report


@dataclasses.dataclass
class CreateAsyncReportSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAsyncReportRequest:
    security: CreateAsyncReportSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAsyncReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_async_report_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    create_async_report_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_async_report_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_async_report_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_async_report_422_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
