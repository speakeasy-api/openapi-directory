import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import component as shared_component


@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionDataSettings:
    r"""TemplateDefinitionDataSettings
    Defines filter and sort option for root data set.
    """
    
    filter_by: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterBy') }})
    sort_by: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    

@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionEditor:
    r"""TemplateDefinitionEditor
    Configuration preferences for the editor
    """
    
    height_multiplier: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightMultiplier') }})
    
class TemplateDefinitionLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionLayoutMargins:
    r"""TemplateDefinitionLayoutMargins
    Page margins in units
    """
    
    bottom: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    left: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    right: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
class TemplateDefinitionLayoutOrientationEnum(str, Enum):
    PORTRAIT = "portrait"
    LANDSCAPE = "landscape"

class TemplateDefinitionLayoutRepeatLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionLayoutRepeatLayout:
    r"""TemplateDefinitionLayoutRepeatLayout
    Defines page size if layout is repeated on the page e.g sheet labels
    """
    
    format: Optional[TemplateDefinitionLayoutRepeatLayoutFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
class TemplateDefinitionLayoutUnitEnum(str, Enum):
    CM = "cm"
    IN = "in"


@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionLayout:
    r"""TemplateDefinitionLayout
    Defines template layout (e.g page format, margins).
    """
    
    empty_labels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emptyLabels') }})
    format: Optional[TemplateDefinitionLayoutFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    margins: Optional[TemplateDefinitionLayoutMargins] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('margins') }})
    orientation: Optional[TemplateDefinitionLayoutOrientationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    repeat_layout: Optional[TemplateDefinitionLayoutRepeatLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatLayout') }})
    rotation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotation') }})
    unit: Optional[TemplateDefinitionLayoutUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionPagesMargins:
    bottom: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    right: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    

@dataclass_json
@dataclasses.dataclass
class TemplateDefinitionPages:
    components: Optional[list[shared_component.Component]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    margins: Optional[TemplateDefinitionPagesMargins] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('margins') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class TemplateDefinition:
    data_settings: Optional[TemplateDefinitionDataSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSettings') }})
    editor: Optional[TemplateDefinitionEditor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editor') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_draft: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDraft') }})
    layout: Optional[TemplateDefinitionLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pages: Optional[list[TemplateDefinitionPages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
