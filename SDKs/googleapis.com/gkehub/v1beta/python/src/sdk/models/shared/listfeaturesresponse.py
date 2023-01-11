import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import feature as shared_feature


@dataclass_json
@dataclasses.dataclass
class ListFeaturesResponse:
    r"""ListFeaturesResponse
    Response message for the `GkeHub.ListFeatures` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    resources: Optional[list[shared_feature.Feature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
