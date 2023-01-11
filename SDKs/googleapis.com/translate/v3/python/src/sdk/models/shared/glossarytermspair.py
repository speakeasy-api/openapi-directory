import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glossaryterm as shared_glossaryterm


@dataclass_json
@dataclasses.dataclass
class GlossaryTermsPair:
    r"""GlossaryTermsPair
    Represents a single entry for an unidirectional glossary.
    """
    
    source_term: Optional[shared_glossaryterm.GlossaryTerm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTerm') }})
    target_term: Optional[shared_glossaryterm.GlossaryTerm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetTerm') }})
    
