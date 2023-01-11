import dataclasses
from typing import Optional
from ..shared import v3_disruptionresponse as shared_v3_disruptionresponse
from ..shared import v3_errorresponse as shared_v3_errorresponse


@dataclasses.dataclass
class DisruptionsGetDisruptionByIDPathParams:
    disruption_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'disruption_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisruptionsGetDisruptionByIDQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DisruptionsGetDisruptionByIDRequest:
    path_params: DisruptionsGetDisruptionByIDPathParams = dataclasses.field()
    query_params: DisruptionsGetDisruptionByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DisruptionsGetDisruptionByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_disruption_response: Optional[shared_v3_disruptionresponse.V3DisruptionResponse] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    
