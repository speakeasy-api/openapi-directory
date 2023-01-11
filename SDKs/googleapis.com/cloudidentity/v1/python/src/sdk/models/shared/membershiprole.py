import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expirydetail as shared_expirydetail
from ..shared import restrictionevaluations as shared_restrictionevaluations


@dataclass_json
@dataclasses.dataclass
class MembershipRole:
    r"""MembershipRole
    A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
    """
    
    expiry_detail: Optional[shared_expirydetail.ExpiryDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDetail') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restriction_evaluations: Optional[shared_restrictionevaluations.RestrictionEvaluations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionEvaluations') }})
    
