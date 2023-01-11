import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner:
    latitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner:
    latitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateReachableRangePostDataParametersAvoidAreasRectangles:
    north_east_corner: Optional[CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('northEastCorner') }})
    south_west_corner: Optional[CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('southWestCorner') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateReachableRangePostDataParametersAvoidAreas:
    rectangles: Optional[list[CalculateReachableRangePostDataParametersAvoidAreasRectangles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rectangles') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateReachableRangePostDataParameters:
    allow_vignette: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowVignette') }})
    avoid_areas: Optional[CalculateReachableRangePostDataParametersAvoidAreas] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidAreas') }})
    avoid_vignette: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidVignette') }})
    
