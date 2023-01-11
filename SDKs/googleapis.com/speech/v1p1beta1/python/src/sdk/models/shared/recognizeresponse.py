import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import speechrecognitionresult as shared_speechrecognitionresult
from ..shared import speechadaptationinfo as shared_speechadaptationinfo


@dataclass_json
@dataclasses.dataclass
class RecognizeResponse:
    r"""RecognizeResponse
    The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
    """
    
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    results: Optional[list[shared_speechrecognitionresult.SpeechRecognitionResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    speech_adaptation_info: Optional[shared_speechadaptationinfo.SpeechAdaptationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechAdaptationInfo') }})
    total_billed_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalBilledTime') }})
    
