import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import propernouncategorizedout as shared_propernouncategorizedout


@dataclass_json
@dataclasses.dataclass
class BatchProperNounCategorizedOut:
    r"""BatchProperNounCategorizedOut
    Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
    """
    
    proper_nouns: Optional[list[shared_propernouncategorizedout.ProperNounCategorizedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properNouns') }})
    
