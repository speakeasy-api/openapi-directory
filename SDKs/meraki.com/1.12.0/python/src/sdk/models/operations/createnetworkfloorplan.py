import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkFloorPlanPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFloorPlanRequestBodyBottomLeftCorner:
    r"""CreateNetworkFloorPlanRequestBodyBottomLeftCorner
    The longitude and latitude of the bottom left corner of your floor plan.
    """
    
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFloorPlanRequestBodyBottomRightCorner:
    r"""CreateNetworkFloorPlanRequestBodyBottomRightCorner
    The longitude and latitude of the bottom right corner of your floor plan.
    """
    
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFloorPlanRequestBodyCenter:
    r"""CreateNetworkFloorPlanRequestBodyCenter
    The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
    """
    
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFloorPlanRequestBodyTopLeftCorner:
    r"""CreateNetworkFloorPlanRequestBodyTopLeftCorner
    The longitude and latitude of the top left corner of your floor plan.
    """
    
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFloorPlanRequestBodyTopRightCorner:
    r"""CreateNetworkFloorPlanRequestBodyTopRightCorner
    The longitude and latitude of the top right corner of your floor plan.
    """
    
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFloorPlanRequestBody:
    image_contents: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContents') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    bottom_left_corner: Optional[CreateNetworkFloorPlanRequestBodyBottomLeftCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomLeftCorner') }})
    bottom_right_corner: Optional[CreateNetworkFloorPlanRequestBodyBottomRightCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomRightCorner') }})
    center: Optional[CreateNetworkFloorPlanRequestBodyCenter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    top_left_corner: Optional[CreateNetworkFloorPlanRequestBodyTopLeftCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLeftCorner') }})
    top_right_corner: Optional[CreateNetworkFloorPlanRequestBodyTopRightCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topRightCorner') }})
    

@dataclasses.dataclass
class CreateNetworkFloorPlanRequest:
    path_params: CreateNetworkFloorPlanPathParams = dataclasses.field()
    request: CreateNetworkFloorPlanRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkFloorPlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_floor_plan_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
