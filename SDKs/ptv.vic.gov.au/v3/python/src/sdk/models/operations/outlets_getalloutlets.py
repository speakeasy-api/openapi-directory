import dataclasses
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_outletresponse as shared_v3_outletresponse


@dataclasses.dataclass
class OutletsGetAllOutletsQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OutletsGetAllOutletsRequest:
    query_params: OutletsGetAllOutletsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OutletsGetAllOutletsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_outlet_response: Optional[shared_v3_outletresponse.V3OutletResponse] = dataclasses.field(default=None)
    
