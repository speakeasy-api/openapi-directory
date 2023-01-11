import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetLocationsV4QueryParams:
    geofence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geofenceId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLocationsV4Headers:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLocationsV4Security:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetLocationsV4200ApplicationJSONItemsLocation:
    r"""GetLocationsV4200ApplicationJSONItemsLocation
    Location coordinates.
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLocationsV4200ApplicationJSONItems:
    r"""GetLocationsV4200ApplicationJSONItems
    Location object body.
    """
    
    location: GetLocationsV4200ApplicationJSONItemsLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    geofence_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLocationsV4200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    items: list[GetLocationsV4200ApplicationJSONItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLocationsV4400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLocationsV4401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLocationsV4403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetLocationsV4Request:
    headers: GetLocationsV4Headers = dataclasses.field()
    query_params: GetLocationsV4QueryParams = dataclasses.field()
    security: GetLocationsV4Security = dataclasses.field()
    

@dataclasses.dataclass
class GetLocationsV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_locations_v4_200_application_json_object: Optional[GetLocationsV4200ApplicationJSON] = dataclasses.field(default=None)
    get_locations_v4_400_application_json_object: Optional[GetLocationsV4400ApplicationJSON] = dataclasses.field(default=None)
    get_locations_v4_401_application_json_object: Optional[GetLocationsV4401ApplicationJSON] = dataclasses.field(default=None)
    get_locations_v4_403_application_json_object: Optional[GetLocationsV4403ApplicationJSON] = dataclasses.field(default=None)
    
