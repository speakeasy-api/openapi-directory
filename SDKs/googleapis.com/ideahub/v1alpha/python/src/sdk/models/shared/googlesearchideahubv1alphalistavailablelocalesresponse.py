import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesearchideahubv1alphaavailablelocale as shared_googlesearchideahubv1alphaavailablelocale


@dataclass_json
@dataclasses.dataclass
class GoogleSearchIdeahubV1alphaListAvailableLocalesResponse:
    r"""GoogleSearchIdeahubV1alphaListAvailableLocalesResponse
    Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
    """
    
    available_locales: Optional[list[shared_googlesearchideahubv1alphaavailablelocale.GoogleSearchIdeahubV1alphaAvailableLocale]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableLocales') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
