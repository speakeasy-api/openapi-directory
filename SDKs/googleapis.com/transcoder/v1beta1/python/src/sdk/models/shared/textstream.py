import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textatom as shared_textatom


@dataclass_json
@dataclasses.dataclass
class TextStream:
    r"""TextStream
    Encoding of a text stream. For example, closed captions or subtitles.
    """
    
    codec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    mapping: Optional[list[shared_textatom.TextAtom]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapping') }})
    
