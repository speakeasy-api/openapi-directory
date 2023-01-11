import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefactcheckingfactchecktoolsv1alpha1claimreview as shared_googlefactcheckingfactchecktoolsv1alpha1claimreview


@dataclass_json
@dataclasses.dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1Claim:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1Claim
    Information about the claim.
    """
    
    claim_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimDate') }})
    claim_review: Optional[list[shared_googlefactcheckingfactchecktoolsv1alpha1claimreview.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReview') }})
    claimant: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimant') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
