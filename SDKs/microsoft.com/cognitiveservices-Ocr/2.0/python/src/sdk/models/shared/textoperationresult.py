import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textrecognitionresult as shared_textrecognitionresult
from ..shared import operationstatus_enum as shared_operationstatus_enum


@dataclass_json
@dataclasses.dataclass
class TextOperationResult:
    r"""TextOperationResult
    Result of recognition text operation.
    """
    
    recognition_result: Optional[shared_textrecognitionresult.TextRecognitionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recognitionResult') }})
    status: Optional[shared_operationstatus_enum.OperationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
