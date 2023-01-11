import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectedlanguage as shared_detectedlanguage


@dataclass_json
@dataclasses.dataclass
class DetectLanguageResponse:
    r"""DetectLanguageResponse
    The response message for language detection.
    """
    
    languages: Optional[list[shared_detectedlanguage.DetectedLanguage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    
