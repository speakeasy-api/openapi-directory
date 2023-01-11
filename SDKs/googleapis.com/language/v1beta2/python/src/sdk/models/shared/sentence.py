import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentiment as shared_sentiment
from ..shared import textspan as shared_textspan


@dataclass_json
@dataclasses.dataclass
class Sentence:
    r"""Sentence
    Represents a sentence in the input document.
    """
    
    sentiment: Optional[shared_sentiment.Sentiment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    text: Optional[shared_textspan.TextSpan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
