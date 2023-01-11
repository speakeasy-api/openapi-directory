import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitymention as shared_entitymention
from ..shared import sentiment as shared_sentiment

class EntityTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    EVENT = "EVENT"
    WORK_OF_ART = "WORK_OF_ART"
    CONSUMER_GOOD = "CONSUMER_GOOD"
    OTHER = "OTHER"
    PHONE_NUMBER = "PHONE_NUMBER"
    ADDRESS = "ADDRESS"
    DATE = "DATE"
    NUMBER = "NUMBER"
    PRICE = "PRICE"


@dataclass_json
@dataclasses.dataclass
class Entity:
    r"""Entity
    Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
    """
    
    mentions: Optional[list[shared_entitymention.EntityMention]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mentions') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    salience: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salience') }})
    sentiment: Optional[shared_sentiment.Sentiment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    type: Optional[EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
