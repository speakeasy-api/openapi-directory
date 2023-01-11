import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationcategory as shared_classificationcategory
from ..shared import sentiment as shared_sentiment
from ..shared import entity as shared_entity
from ..shared import sentence as shared_sentence
from ..shared import token as shared_token


@dataclass_json
@dataclasses.dataclass
class AnnotateTextResponse:
    r"""AnnotateTextResponse
    The text annotations response message.
    """
    
    categories: Optional[list[shared_classificationcategory.ClassificationCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    document_sentiment: Optional[shared_sentiment.Sentiment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSentiment') }})
    entities: Optional[list[shared_entity.Entity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentences: Optional[list[shared_sentence.Sentence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentences') }})
    tokens: Optional[list[shared_token.Token]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    
