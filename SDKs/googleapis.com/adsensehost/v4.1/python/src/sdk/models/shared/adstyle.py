import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdStyleColors:
    r"""AdStyleColors
    The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
    """
    
    background: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    border: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('border') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class AdStyleFont:
    r"""AdStyleFont
    The font which is included in the style.
    """
    
    family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclasses.dataclass
class AdStyle:
    colors: Optional[AdStyleColors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    corners: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corners') }})
    font: Optional[AdStyleFont] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('font') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
