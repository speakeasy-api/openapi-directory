import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tilecoordinates as shared_tilecoordinates
from ..shared import firstderivativeelevationgrid as shared_firstderivativeelevationgrid
from ..shared import secondderivativeelevationgrid as shared_secondderivativeelevationgrid


@dataclass_json
@dataclasses.dataclass
class TerrainTile:
    r"""TerrainTile
    A tile containing information about the terrain located in the region it covers.
    """
    
    coordinates: Optional[shared_tilecoordinates.TileCoordinates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    first_derivative: Optional[shared_firstderivativeelevationgrid.FirstDerivativeElevationGrid] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDerivative') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    second_derivative: Optional[shared_secondderivativeelevationgrid.SecondDerivativeElevationGrid] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondDerivative') }})
    
