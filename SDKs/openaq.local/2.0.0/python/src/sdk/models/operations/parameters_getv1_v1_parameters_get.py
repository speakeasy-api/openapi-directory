import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import openaqparametersresult as shared_openaqparametersresult


@dataclasses.dataclass
class ParametersGetv1V1ParametersGetQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceId', 'style': 'form', 'explode': True }})
    source_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceName', 'style': 'form', 'explode': True }})
    source_slug: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceSlug', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ParametersGetv1V1ParametersGetRequest:
    query_params: ParametersGetv1V1ParametersGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ParametersGetv1V1ParametersGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    open_aq_parameters_result: Optional[shared_openaqparametersresult.OpenAqParametersResult] = dataclasses.field(default=None)
    
