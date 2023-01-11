import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sitesummaryresponse as shared_sitesummaryresponse


@dataclass_json
@dataclasses.dataclass
class ViolatingSitesResponse:
    r"""ViolatingSitesResponse
    Response message for ListViolatingSites.
    """
    
    violating_sites: Optional[list[shared_sitesummaryresponse.SiteSummaryResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violatingSites') }})
    
