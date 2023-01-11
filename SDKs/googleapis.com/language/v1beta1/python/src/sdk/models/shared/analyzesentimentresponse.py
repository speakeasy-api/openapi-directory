import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentiment as shared_sentiment
from ..shared import sentence as shared_sentence


@dataclass_json
@dataclasses.dataclass
class AnalyzeSentimentResponse:
    r"""AnalyzeSentimentResponse
    The sentiment analysis response message.
    """
    
    document_sentiment: Optional[shared_sentiment.Sentiment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSentiment') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentences: Optional[list[shared_sentence.Sentence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentences') }})
    
