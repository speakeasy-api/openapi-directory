import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import isochroneresponsepolygon as shared_isochroneresponsepolygon


@dataclass_json
@dataclasses.dataclass
class IsochroneResponse:
    copyrights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    polygons: Optional[list[shared_isochroneresponsepolygon.IsochroneResponsePolygon]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polygons') }})
    
