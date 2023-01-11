import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glossarytermspair as shared_glossarytermspair
from ..shared import glossarytermsset as shared_glossarytermsset


@dataclass_json
@dataclasses.dataclass
class GlossaryEntry:
    r"""GlossaryEntry
    Represents a single entry in a glossary.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    terms_pair: Optional[shared_glossarytermspair.GlossaryTermsPair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsPair') }})
    terms_set: Optional[shared_glossarytermsset.GlossaryTermsSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsSet') }})
    
