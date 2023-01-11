import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage as shared_googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage


@dataclass_json
@dataclasses.dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
    Response from listing `ClaimReview` markup.
    """
    
    claim_review_markup_pages: Optional[list[shared_googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewMarkupPages') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
