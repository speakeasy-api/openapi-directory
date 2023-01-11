import dataclasses
from typing import Optional
from enum import Enum
from ..shared import textrecognitionmode_enum as shared_textrecognitionmode_enum
from ..shared import imageurl as shared_imageurl
from ..shared import computervisionerror as shared_computervisionerror


@dataclasses.dataclass
class RecognizeTextQueryParams:
    mode: shared_textrecognitionmode_enum.TextRecognitionModeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RecognizeTextRequest:
    query_params: RecognizeTextQueryParams = dataclasses.field()
    request: shared_imageurl.ImageURL = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RecognizeTextResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    computer_vision_error: Optional[shared_computervisionerror.ComputerVisionError] = dataclasses.field(default=None)
    
