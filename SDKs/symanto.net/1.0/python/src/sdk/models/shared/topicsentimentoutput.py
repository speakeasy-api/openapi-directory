import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentiment as shared_sentiment
from ..shared import topicsentiment as shared_topicsentiment
from ..shared import topic as shared_topic


@dataclass_json
@dataclasses.dataclass
class TopicSentimentOutput:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentiments: Optional[list[shared_sentiment.Sentiment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiments') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    topic_sentiments: Optional[list[shared_topicsentiment.TopicSentiment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicSentiments') }})
    topics: Optional[list[shared_topic.Topic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
