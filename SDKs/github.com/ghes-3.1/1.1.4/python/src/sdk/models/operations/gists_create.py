import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import gist_simple as shared_gist_simple
from ..shared import validation_error as shared_validation_error


@dataclass_json
@dataclasses.dataclass
class GistsCreateRequestBodyFiles:
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    
class GistsCreateRequestBodyPublic2Enum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass_json
@dataclasses.dataclass
class GistsCreateRequestBody:
    files: dict[str, GistsCreateRequestBodyFiles] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    public: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclasses.dataclass
class GistsCreateRequest:
    request: Optional[GistsCreateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GistsCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gist_simple: Optional[shared_gist_simple.GistSimple] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
