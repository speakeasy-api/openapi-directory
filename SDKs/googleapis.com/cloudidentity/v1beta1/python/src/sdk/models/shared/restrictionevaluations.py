import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membershiprolerestrictionevaluation as shared_membershiprolerestrictionevaluation


@dataclass_json
@dataclasses.dataclass
class RestrictionEvaluations:
    r"""RestrictionEvaluations
    Evaluations of restrictions applied to parent group on this membership.
    """
    
    member_restriction_evaluation: Optional[shared_membershiprolerestrictionevaluation.MembershipRoleRestrictionEvaluation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberRestrictionEvaluation') }})
    
