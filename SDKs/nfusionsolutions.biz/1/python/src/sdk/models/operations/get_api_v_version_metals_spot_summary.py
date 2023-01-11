import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import unitofmeasure_enum as shared_unitofmeasure_enum
from ..shared import summaryresponse as shared_summaryresponse


@dataclasses.dataclass
class GetAPIVVersionMetalsSpotSummaryPathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIVVersionMetalsSpotSummaryQueryParams:
    metals: str = dataclasses.field(metadata={'query_param': { 'field_name': 'metals', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    unitofmeasure: Optional[shared_unitofmeasure_enum.UnitOfMeasureEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unitofmeasure', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIVVersionMetalsSpotSummaryRequest:
    path_params: GetAPIVVersionMetalsSpotSummaryPathParams = dataclasses.field()
    query_params: GetAPIVVersionMetalsSpotSummaryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIVVersionMetalsSpotSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    problem_details: Optional[dict[str, Any]] = dataclasses.field(default=None)
    summary_responses: Optional[list[shared_summaryresponse.SummaryResponse]] = dataclasses.field(default=None)
    
