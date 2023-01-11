import dataclasses
from typing import Any,Optional
from ..shared import gherror as shared_gherror


@dataclasses.dataclass
class GetGeocodeQueryParams:
    debug: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    point: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    provider: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'provider', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    reverse: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reverse', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeocodeRequest:
    query_params: GetGeocodeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeocodeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    geocoding_response: Optional[Any] = dataclasses.field(default=None)
    
