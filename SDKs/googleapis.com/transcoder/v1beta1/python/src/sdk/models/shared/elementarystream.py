import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiostream as shared_audiostream
from ..shared import textstream as shared_textstream
from ..shared import videostream as shared_videostream


@dataclass_json
@dataclasses.dataclass
class ElementaryStream:
    r"""ElementaryStream
    Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
    """
    
    audio_stream: Optional[shared_audiostream.AudioStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioStream') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    text_stream: Optional[shared_textstream.TextStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStream') }})
    video_stream: Optional[shared_videostream.VideoStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoStream') }})
    
