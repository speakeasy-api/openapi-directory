"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import speechadaptationinfo as shared_speechadaptationinfo
from ..shared import speechrecognitionresult as shared_speechrecognitionresult
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RecognizeResponse:
    r"""The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages."""
    
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestId'), 'exclude': lambda f: f is None }})
    r"""The ID associated with the request. This is a unique ID specific only to the given request."""  
    results: Optional[list[shared_speechrecognitionresult.SpeechRecognitionResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('results'), 'exclude': lambda f: f is None }})
    r"""Sequential list of transcription results corresponding to sequential portions of audio."""  
    speech_adaptation_info: Optional[shared_speechadaptationinfo.SpeechAdaptationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('speechAdaptationInfo'), 'exclude': lambda f: f is None }})
    r"""Information on speech adaptation use in results"""  
    total_billed_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('totalBilledTime'), 'exclude': lambda f: f is None }})
    r"""When available, billed audio seconds for the corresponding request."""  
    