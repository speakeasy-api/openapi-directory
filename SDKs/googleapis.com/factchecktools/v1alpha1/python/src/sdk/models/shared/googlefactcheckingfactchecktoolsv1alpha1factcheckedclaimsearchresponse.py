import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefactcheckingfactchecktoolsv1alpha1claim as shared_googlefactcheckingfactchecktoolsv1alpha1claim


@dataclass_json
@dataclasses.dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
    Response from searching fact-checked claims.
    """
    
    claims: Optional[list[shared_googlefactcheckingfactchecktoolsv1alpha1claim.GoogleFactcheckingFactchecktoolsV1alpha1Claim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
