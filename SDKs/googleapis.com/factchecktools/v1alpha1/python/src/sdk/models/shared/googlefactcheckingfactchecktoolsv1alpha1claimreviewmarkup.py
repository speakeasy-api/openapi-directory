import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefactcheckingfactchecktoolsv1alpha1claimauthor as shared_googlefactcheckingfactchecktoolsv1alpha1claimauthor
from ..shared import googlefactcheckingfactchecktoolsv1alpha1claimrating as shared_googlefactcheckingfactchecktoolsv1alpha1claimrating


@dataclass_json
@dataclasses.dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
    Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
    """
    
    claim_appearances: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimAppearances') }})
    claim_author: Optional[shared_googlefactcheckingfactchecktoolsv1alpha1claimauthor.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimAuthor') }})
    claim_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimDate') }})
    claim_first_appearance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimFirstAppearance') }})
    claim_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimLocation') }})
    claim_reviewed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewed') }})
    rating: Optional[shared_googlefactcheckingfactchecktoolsv1alpha1claimrating.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
