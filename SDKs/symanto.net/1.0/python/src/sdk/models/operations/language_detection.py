import dataclasses
from typing import Optional
from ..shared import languagedetection as shared_languagedetection
from ..shared import languagepredicted as shared_languagepredicted
from ..shared import validationerrors as shared_validationerrors


@dataclasses.dataclass
class LanguageDetectionRequest:
    request: Optional[list[shared_languagedetection.LanguageDetection]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class LanguageDetectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    language_detection_response: Optional[list[shared_languagepredicted.LanguagePredicted]] = dataclasses.field(default=None)
    validation_errors: Optional[shared_validationerrors.ValidationErrors] = dataclasses.field(default=None)
    
