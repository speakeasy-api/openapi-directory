import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import component as shared_component

class TemplateDefinitionNewLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionNewLayoutMargins:
    r"""TemplateDefinitionNewLayoutMargins
    Page margins in units
    """
    
    bottom: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    left: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    right: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
class TemplateDefinitionNewLayoutOrientationEnum(str, Enum):
    PORTRAIT = "portrait"
    LANDSCAPE = "landscape"

class TemplateDefinitionNewLayoutRepeatLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionNewLayoutRepeatLayout:
    r"""TemplateDefinitionNewLayoutRepeatLayout
    Defines page size if layout is repeated on the page e.g sheet labels
    """
    
    format: Optional[TemplateDefinitionNewLayoutRepeatLayoutFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
class TemplateDefinitionNewLayoutUnitEnum(str, Enum):
    CM = "cm"
    IN = "in"


@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionNewLayout:
    r"""TemplateDefinitionNewLayout
    Defines template layout (e.g page format, margins).
    """
    
    empty_labels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emptyLabels') }})
    format: Optional[TemplateDefinitionNewLayoutFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    margins: Optional[TemplateDefinitionNewLayoutMargins] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('margins') }})
    orientation: Optional[TemplateDefinitionNewLayoutOrientationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    repeat_layout: Optional[TemplateDefinitionNewLayoutRepeatLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatLayout') }})
    rotaion: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotaion') }})
    unit: Optional[TemplateDefinitionNewLayoutUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionNewPagesMargins:
    bottom: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    right: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    

@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionNewPages:
    components: Optional[list[shared_component.Component]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    margins: Optional[TemplateDefinitionNewPagesMargins] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('margins') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionNew:
    r"""TemplateDefinitionNew
    Template configuration
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    is_draft: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDraft') }})
    layout: Optional[TemplateDefinitionNewLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    pages: Optional[list[TemplateDefinitionNewPages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
