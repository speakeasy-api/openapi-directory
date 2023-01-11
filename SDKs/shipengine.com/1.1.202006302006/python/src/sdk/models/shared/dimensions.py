import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Dimensions:
    r"""Dimensions
    The dimensions of a package
    """
    
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    length: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    unit: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
