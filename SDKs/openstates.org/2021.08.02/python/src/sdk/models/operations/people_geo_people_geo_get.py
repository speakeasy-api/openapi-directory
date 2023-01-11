import dataclasses
from typing import Optional
from enum import Enum
from ..shared import personinclude_enum as shared_personinclude_enum
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import personlist as shared_personlist


@dataclasses.dataclass
class PeopleGeoPeopleGeoGetQueryParams:
    lat: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_personinclude_enum.PersonIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PeopleGeoPeopleGeoGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PeopleGeoPeopleGeoGetRequest:
    headers: PeopleGeoPeopleGeoGetHeaders = dataclasses.field()
    query_params: PeopleGeoPeopleGeoGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PeopleGeoPeopleGeoGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    person_list: Optional[shared_personlist.PersonList] = dataclasses.field(default=None)
    
