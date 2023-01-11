import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sms_response_get_report as shared_sms_response_get_report
from ..shared import voice_call_response_get_report as shared_voice_call_response_get_report
from ..shared import in_app_voice_response_get_report as shared_in_app_voice_response_get_report
from ..shared import websocket_call_response_get_report as shared_websocket_call_response_get_report
from ..shared import verify_api_response_get_report as shared_verify_api_response_get_report
from ..shared import number_insight_response_get_report as shared_number_insight_response_get_report
from ..shared import messages_response_get_report as shared_messages_response_get_report
from ..shared import conversations_response_get_report as shared_conversations_response_get_report
from ..shared import asr_response_get_report as shared_asr_response_get_report


@dataclasses.dataclass
class GetReportPathParams:
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetReportRequest:
    path_params: GetReportPathParams = dataclasses.field()
    security: GetReportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_report_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    get_report_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_report_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
