import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import intervalcollectionresponse as shared_intervalcollectionresponse


@dataclasses.dataclass
class GetAPIVVersionCurrenciesHistoryPathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIVVersionCurrenciesHistoryQueryParams:
    pairs: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pairs', 'style': 'form', 'explode': True }})
    start: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIVVersionCurrenciesHistoryRequest:
    path_params: GetAPIVVersionCurrenciesHistoryPathParams = dataclasses.field()
    query_params: GetAPIVVersionCurrenciesHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIVVersionCurrenciesHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    interval_collection_responses: Optional[list[shared_intervalcollectionresponse.IntervalCollectionResponse]] = dataclasses.field(default=None)
    problem_details: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
