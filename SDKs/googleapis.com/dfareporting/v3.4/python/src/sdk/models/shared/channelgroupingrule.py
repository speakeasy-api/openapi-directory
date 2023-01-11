import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disjunctivematchstatement as shared_disjunctivematchstatement


@dataclass_json
@dataclasses.dataclass
class ChannelGroupingRule:
    r"""ChannelGroupingRule
    Represents a DfaReporting channel grouping rule.
    """
    
    disjunctive_match_statements: Optional[list[shared_disjunctivematchstatement.DisjunctiveMatchStatement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disjunctiveMatchStatements') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
