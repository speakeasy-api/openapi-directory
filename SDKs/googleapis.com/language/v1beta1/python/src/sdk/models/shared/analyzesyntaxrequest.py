import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import document as shared_document

class AnalyzeSyntaxRequestEncodingTypeEnum(str, Enum):
    NONE = "NONE"
    UTF8 = "UTF8"
    UTF16 = "UTF16"
    UTF32 = "UTF32"


@dataclass_json
@dataclasses.dataclass
class AnalyzeSyntaxRequest:
    r"""AnalyzeSyntaxRequest
    The syntax analysis request message.
    """
    
    document: Optional[shared_document.Document] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    encoding_type: Optional[AnalyzeSyntaxRequestEncodingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingType') }})
    
