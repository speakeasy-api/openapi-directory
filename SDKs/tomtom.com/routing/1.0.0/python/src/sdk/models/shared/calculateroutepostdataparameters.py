import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner:
    latitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner:
    latitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateRoutePostDataParametersAvoidAreasRectangles:
    north_east_corner: Optional[CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('northEastCorner') }})
    south_west_corner: Optional[CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('southWestCorner') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateRoutePostDataParametersAvoidAreas:
    rectangles: Optional[list[CalculateRoutePostDataParametersAvoidAreasRectangles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rectangles') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateRoutePostDataParameters:
    allow_vignette: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowVignette') }})
    avoid_areas: Optional[CalculateRoutePostDataParametersAvoidAreas] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidAreas') }})
    avoid_vignette: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidVignette') }})
    supporting_points: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportingPoints') }})
    
