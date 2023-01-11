import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor
    Information about the claim review author.
    """
    
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
