import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import document as shared_document
from ..shared import features as shared_features

class AnnotateTextRequestEncodingTypeEnum(str, Enum):
    NONE = "NONE"
    UTF8 = "UTF8"
    UTF16 = "UTF16"
    UTF32 = "UTF32"


@dataclass_json
@dataclasses.dataclass
class AnnotateTextRequest:
    r"""AnnotateTextRequest
    The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
    """
    
    document: Optional[shared_document.Document] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    encoding_type: Optional[AnnotateTextRequestEncodingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingType') }})
    features: Optional[shared_features.Features] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    
