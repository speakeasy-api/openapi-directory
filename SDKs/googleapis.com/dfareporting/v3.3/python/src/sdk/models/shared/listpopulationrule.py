import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listpopulationclause as shared_listpopulationclause


@dataclass_json
@dataclasses.dataclass
class ListPopulationRule:
    r"""ListPopulationRule
    Remarketing List Population Rule.
    """
    
    floodlight_activity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityId') }})
    floodlight_activity_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityName') }})
    list_population_clauses: Optional[list[shared_listpopulationclause.ListPopulationClause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPopulationClauses') }})
    
