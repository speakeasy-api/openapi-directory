import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvideointelligencev1p1beta1_speechcontext as shared_googlecloudvideointelligencev1p1beta1_speechcontext


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig:
    r"""GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig
    Config for SPEECH_TRANSCRIPTION.
    """
    
    audio_tracks: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioTracks') }})
    diarization_speaker_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diarizationSpeakerCount') }})
    enable_automatic_punctuation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutomaticPunctuation') }})
    enable_speaker_diarization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpeakerDiarization') }})
    enable_word_confidence: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableWordConfidence') }})
    filter_profanity: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterProfanity') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    max_alternatives: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAlternatives') }})
    speech_contexts: Optional[list[shared_googlecloudvideointelligencev1p1beta1_speechcontext.GoogleCloudVideointelligenceV1p1beta1SpeechContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechContexts') }})
    
