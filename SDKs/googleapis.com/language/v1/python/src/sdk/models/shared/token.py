import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dependencyedge as shared_dependencyedge
from ..shared import partofspeech as shared_partofspeech
from ..shared import textspan as shared_textspan


@dataclass_json
@dataclasses.dataclass
class Token:
    r"""Token
    Represents the smallest syntactic building block of the text.
    """
    
    dependency_edge: Optional[shared_dependencyedge.DependencyEdge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyEdge') }})
    lemma: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lemma') }})
    part_of_speech: Optional[shared_partofspeech.PartOfSpeech] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partOfSpeech') }})
    text: Optional[shared_textspan.TextSpan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
