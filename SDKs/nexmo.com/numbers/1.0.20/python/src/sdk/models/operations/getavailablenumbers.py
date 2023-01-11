import dataclasses
from typing import Optional
from enum import Enum
from ..shared import search_pattern_enum as shared_search_pattern_enum
from ..shared import type_enum as shared_type_enum
from ..shared import account_unauthorized as shared_account_unauthorized
from ..shared import available_numbers as shared_available_numbers


@dataclasses.dataclass
class GetAvailableNumbersQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    features: Optional[shared_search_pattern_enum.SearchPatternEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'features', 'style': 'form', 'explode': True }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'index', 'style': 'form', 'explode': True }})
    pattern: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pattern', 'style': 'form', 'explode': True }})
    search_pattern: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_pattern', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    type: Optional[shared_type_enum.TypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAvailableNumbersRequest:
    query_params: GetAvailableNumbersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAvailableNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_unauthorized: Optional[shared_account_unauthorized.AccountUnauthorized] = dataclasses.field(default=None)
    available_numbers: Optional[shared_available_numbers.AvailableNumbers] = dataclasses.field(default=None)
    
