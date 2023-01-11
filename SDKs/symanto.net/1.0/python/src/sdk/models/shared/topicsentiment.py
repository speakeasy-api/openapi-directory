import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentiment as shared_sentiment
from ..shared import topic as shared_topic


@dataclass_json
@dataclasses.dataclass
class TopicSentiment:
    sentence: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentence') }})
    sentiment: Optional[shared_sentiment.Sentiment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    topic: Optional[shared_topic.Topic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
