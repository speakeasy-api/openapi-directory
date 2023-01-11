import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentence as shared_sentence
from ..shared import token as shared_token


@dataclass_json
@dataclasses.dataclass
class AnalyzeSyntaxResponse:
    r"""AnalyzeSyntaxResponse
    The syntax analysis response message.
    """
    
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentences: Optional[list[shared_sentence.Sentence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentences') }})
    tokens: Optional[list[shared_token.Token]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    
