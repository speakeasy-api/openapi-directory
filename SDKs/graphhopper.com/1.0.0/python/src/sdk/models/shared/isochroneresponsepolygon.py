import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import polygon as shared_polygon


@dataclass_json
@dataclasses.dataclass
class IsochroneResponsePolygonProperties:
    bucket: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    

@dataclass_json
@dataclasses.dataclass
class IsochroneResponsePolygon:
    r"""IsochroneResponsePolygon
    A found path
    """
    
    geometry: Optional[shared_polygon.Polygon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: Optional[IsochroneResponsePolygonProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
