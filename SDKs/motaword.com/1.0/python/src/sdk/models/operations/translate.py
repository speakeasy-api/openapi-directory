import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileasdata as shared_fileasdata
from ..shared import instantcontentstranslationresult as shared_instantcontentstranslationresult
from ..shared import instantfilestranslationresult as shared_instantfilestranslationresult


@dataclasses.dataclass
class TranslatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_language: str = dataclasses.field(metadata={'path_param': { 'field_name': 'targetLanguage', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TranslateRequestBody:
    contents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    documents: Optional[list[shared_fileasdata.FileAsData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class Translate200ApplicationJSON:
    results: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class TranslateRequest:
    path_params: TranslatePathParams = dataclasses.field()
    request: Optional[TranslateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TranslateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    translate_200_application_json_object: Optional[Translate200ApplicationJSON] = dataclasses.field(default=None)
    
