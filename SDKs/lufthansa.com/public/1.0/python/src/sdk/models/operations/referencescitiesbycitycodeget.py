import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReferencesCitiesByCityCodeGetPathParams:
    city_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cityCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesCitiesByCityCodeGetQueryParams:
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReferencesCitiesByCityCodeGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesCitiesByCityCodeGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReferencesCitiesByCityCodeGetRequest:
    headers: ReferencesCitiesByCityCodeGetHeaders = dataclasses.field()
    path_params: ReferencesCitiesByCityCodeGetPathParams = dataclasses.field()
    query_params: ReferencesCitiesByCityCodeGetQueryParams = dataclasses.field()
    security: ReferencesCitiesByCityCodeGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReferencesCitiesByCityCodeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    references_cities_by_city_code_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
