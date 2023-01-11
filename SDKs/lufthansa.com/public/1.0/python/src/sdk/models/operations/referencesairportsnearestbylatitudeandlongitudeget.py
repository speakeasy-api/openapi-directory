import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams:
    latitude: int = dataclasses.field(metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: int = dataclasses.field(metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams:
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest:
    headers: ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders = dataclasses.field()
    path_params: ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams = dataclasses.field()
    query_params: ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams = dataclasses.field()
    security: ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    references_airports_nearest_by_latitude_and_longitude_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
