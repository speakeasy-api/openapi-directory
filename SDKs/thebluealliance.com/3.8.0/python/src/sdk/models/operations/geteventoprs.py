import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event_oprs as shared_event_oprs


@dataclasses.dataclass
class GetEventOpRsPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventOpRsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventOpRsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventOpRsRequest:
    headers: GetEventOpRsHeaders = dataclasses.field()
    path_params: GetEventOpRsPathParams = dataclasses.field()
    security: GetEventOpRsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventOpRsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    event_op_rs: Optional[shared_event_oprs.EventOpRs] = dataclasses.field(default=None)
    
