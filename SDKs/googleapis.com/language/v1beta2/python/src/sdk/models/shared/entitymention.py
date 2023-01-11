import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentiment as shared_sentiment
from ..shared import textspan as shared_textspan

class EntityMentionTypeEnum(str, Enum):
    TYPE_UNKNOWN = "TYPE_UNKNOWN"
    PROPER = "PROPER"
    COMMON = "COMMON"


@dataclass_json
@dataclasses.dataclass
class EntityMention:
    r"""EntityMention
    Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
    """
    
    sentiment: Optional[shared_sentiment.Sentiment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    text: Optional[shared_textspan.TextSpan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[EntityMentionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
