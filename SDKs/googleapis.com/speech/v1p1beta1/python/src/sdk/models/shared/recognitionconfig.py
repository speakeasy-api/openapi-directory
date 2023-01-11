import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import speechadaptation as shared_speechadaptation
from ..shared import speakerdiarizationconfig as shared_speakerdiarizationconfig
from ..shared import recognitionmetadata as shared_recognitionmetadata
from ..shared import speechcontext as shared_speechcontext
from ..shared import transcriptnormalization as shared_transcriptnormalization

class RecognitionConfigEncodingEnum(str, Enum):
    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    LINEAR16 = "LINEAR16"
    FLAC = "FLAC"
    MULAW = "MULAW"
    AMR = "AMR"
    AMR_WB = "AMR_WB"
    OGG_OPUS = "OGG_OPUS"
    SPEEX_WITH_HEADER_BYTE = "SPEEX_WITH_HEADER_BYTE"
    MP3 = "MP3"
    WEBM_OPUS = "WEBM_OPUS"


@dataclass_json
@dataclasses.dataclass
class RecognitionConfigInput:
    r"""RecognitionConfigInput
    Provides information to the recognizer that specifies how to process the request.
    """
    
    adaptation: Optional[shared_speechadaptation.SpeechAdaptation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adaptation') }})
    alternative_language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeLanguageCodes') }})
    audio_channel_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioChannelCount') }})
    diarization_config: Optional[shared_speakerdiarizationconfig.SpeakerDiarizationConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diarizationConfig') }})
    diarization_speaker_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diarizationSpeakerCount') }})
    enable_automatic_punctuation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutomaticPunctuation') }})
    enable_separate_recognition_per_channel: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSeparateRecognitionPerChannel') }})
    enable_speaker_diarization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpeakerDiarization') }})
    enable_spoken_emojis: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpokenEmojis') }})
    enable_spoken_punctuation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpokenPunctuation') }})
    enable_word_confidence: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableWordConfidence') }})
    enable_word_time_offsets: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableWordTimeOffsets') }})
    encoding: Optional[RecognitionConfigEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    max_alternatives: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAlternatives') }})
    metadata: Optional[shared_recognitionmetadata.RecognitionMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    profanity_filter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profanityFilter') }})
    sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    speech_contexts: Optional[list[shared_speechcontext.SpeechContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechContexts') }})
    transcript_normalization: Optional[shared_transcriptnormalization.TranscriptNormalization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptNormalization') }})
    use_enhanced: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useEnhanced') }})
    
