import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color


@dataclass_json
@dataclasses.dataclass
class Result:
    colors: Optional[list[shared_color.Color]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    number_of_pixel_in_image: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_pixel_in_image') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
