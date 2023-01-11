import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importfile as shared_importfile

class TemplateContentsInterpreterEnum(str, Enum):
    UNKNOWN_INTERPRETER = "UNKNOWN_INTERPRETER"
    PYTHON = "PYTHON"
    JINJA = "JINJA"


@dataclass_json
@dataclasses.dataclass
class TemplateContents:
    r"""TemplateContents
    Files that make up the template contents of a template type.
    """
    
    imports: Optional[list[shared_importfile.ImportFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imports') }})
    interpreter: Optional[TemplateContentsInterpreterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    main_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainTemplate') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
