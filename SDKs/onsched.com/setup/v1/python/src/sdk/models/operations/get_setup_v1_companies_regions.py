import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1CompaniesRegionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1CompaniesRegionsRequest:
    query_params: GetSetupV1CompaniesRegionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CompaniesRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    region_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
