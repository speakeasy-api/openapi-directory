import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import rateresponse as shared_rateresponse


@dataclasses.dataclass
class GetAPIVVersionCurrenciesRatePathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIVVersionCurrenciesRateQueryParams:
    pairs: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pairs', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIVVersionCurrenciesRateRequest:
    path_params: GetAPIVVersionCurrenciesRatePathParams = dataclasses.field()
    query_params: GetAPIVVersionCurrenciesRateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIVVersionCurrenciesRateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    problem_details: Optional[dict[str, Any]] = dataclasses.field(default=None)
    rate_responses: Optional[list[shared_rateresponse.RateResponse]] = dataclasses.field(default=None)
    
