import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listpopulationterm as shared_listpopulationterm


@dataclass_json
@dataclasses.dataclass
class ListPopulationClause:
    r"""ListPopulationClause
    A group clause made up of list population terms representing constraints joined by ORs.
    """
    
    terms: Optional[list[shared_listpopulationterm.ListPopulationTerm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
