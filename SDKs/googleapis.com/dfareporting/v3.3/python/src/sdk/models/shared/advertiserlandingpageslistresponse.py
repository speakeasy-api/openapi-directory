import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landingpage as shared_landingpage


@dataclass_json
@dataclasses.dataclass
class AdvertiserLandingPagesListResponse:
    r"""AdvertiserLandingPagesListResponse
    Landing Page List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    landing_pages: Optional[list[shared_landingpage.LandingPage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landingPages') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
