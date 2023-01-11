import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor as shared_googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor
from ..shared import googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup as shared_googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup


@dataclass_json
@dataclasses.dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    Holds one or more instances of `ClaimReview` markup for a webpage.
    """
    
    claim_review_author: Optional[shared_googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewAuthor') }})
    claim_review_markups: Optional[list[shared_googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewMarkups') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageUrl') }})
    publish_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate') }})
    version_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionId') }})
    
