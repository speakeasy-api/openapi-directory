import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableExportTemplateTemplateLanguageEnum(str, Enum):
    DJANGO = "django"
    JINJA2 = "jinja2"


@dataclass_json
@dataclasses.dataclass
class WritableExportTemplateInput:
    content_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_extension') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime_type') }})
    template_language: Optional[WritableExportTemplateTemplateLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_language') }})
    
