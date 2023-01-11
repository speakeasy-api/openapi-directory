import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entry as shared_entry


@dataclass_json
@dataclasses.dataclass
class TranscriptNormalization:
    r"""TranscriptNormalization
    Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
    """
    
    entries: Optional[list[shared_entry.Entry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
