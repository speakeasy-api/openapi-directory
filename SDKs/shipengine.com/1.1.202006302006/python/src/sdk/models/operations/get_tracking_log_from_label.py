import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_tracking_log_from_label_response_body as shared_get_tracking_log_from_label_response_body


@dataclasses.dataclass
class GetTrackingLogFromLabelPathParams:
    label_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'label_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrackingLogFromLabelRequest:
    path_params: GetTrackingLogFromLabelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackingLogFromLabelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_tracking_log_from_label_response_body: Optional[shared_get_tracking_log_from_label_response_body.GetTrackingLogFromLabelResponseBody] = dataclasses.field(default=None)
    
