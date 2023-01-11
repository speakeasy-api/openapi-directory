import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import embeddedobjectposition as shared_embeddedobjectposition
from ..shared import slicerspec as shared_slicerspec


@dataclass_json
@dataclasses.dataclass
class Slicer:
    r"""Slicer
    A slicer in a sheet.
    """
    
    position: Optional[shared_embeddedobjectposition.EmbeddedObjectPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    slicer_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slicerId') }})
    spec: Optional[shared_slicerspec.SlicerSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
