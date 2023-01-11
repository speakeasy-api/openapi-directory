import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disjunctivematchstatement as shared_disjunctivematchstatement


@dataclass_json
@dataclasses.dataclass
class Rule:
    r"""Rule
    A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied.
    """
    
    disjunctive_match_statements: Optional[list[shared_disjunctivematchstatement.DisjunctiveMatchStatement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disjunctiveMatchStatements') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
