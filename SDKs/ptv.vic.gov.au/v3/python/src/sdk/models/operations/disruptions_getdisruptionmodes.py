import dataclasses
from typing import Optional
from ..shared import v3_disruptionmodesresponse as shared_v3_disruptionmodesresponse
from ..shared import v3_errorresponse as shared_v3_errorresponse


@dataclasses.dataclass
class DisruptionsGetDisruptionModesQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DisruptionsGetDisruptionModesRequest:
    query_params: DisruptionsGetDisruptionModesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DisruptionsGetDisruptionModesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_disruption_modes_response: Optional[shared_v3_disruptionmodesresponse.V3DisruptionModesResponse] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    
