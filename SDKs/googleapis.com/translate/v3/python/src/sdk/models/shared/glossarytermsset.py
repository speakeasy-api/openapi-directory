import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glossaryterm as shared_glossaryterm


@dataclass_json
@dataclasses.dataclass
class GlossaryTermsSet:
    r"""GlossaryTermsSet
    Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
    """
    
    terms: Optional[list[shared_glossaryterm.GlossaryTerm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
