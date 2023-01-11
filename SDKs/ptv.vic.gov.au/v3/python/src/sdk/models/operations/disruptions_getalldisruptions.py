import dataclasses
from typing import Optional
from enum import Enum
from ..shared import v3_disruptionsresponse as shared_v3_disruptionsresponse
from ..shared import v3_errorresponse as shared_v3_errorresponse

class DisruptionsGetAllDisruptionsDisruptionStatusEnum(str, Enum):
    CURRENT = "current"
    PLANNED = "planned"


@dataclasses.dataclass
class DisruptionsGetAllDisruptionsQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    disruption_modes: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disruption_modes', 'style': 'form', 'explode': True }})
    disruption_status: Optional[DisruptionsGetAllDisruptionsDisruptionStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disruption_status', 'style': 'form', 'explode': True }})
    route_types: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DisruptionsGetAllDisruptionsRequest:
    query_params: DisruptionsGetAllDisruptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DisruptionsGetAllDisruptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_disruptions_response: Optional[shared_v3_disruptionsresponse.V3DisruptionsResponse] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    
