import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storedsuggestedtagandregion as shared_storedsuggestedtagandregion
from ..shared import suggestedtagandregionquerytoken as shared_suggestedtagandregionquerytoken


@dataclass_json
@dataclasses.dataclass
class SuggestedTagAndRegionQuery:
    r"""SuggestedTagAndRegionQuery
    The array of result images and token containing session and continuation Ids for the next query.
    """
    
    results: Optional[list[shared_storedsuggestedtagandregion.StoredSuggestedTagAndRegion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    token: Optional[shared_suggestedtagandregionquerytoken.SuggestedTagAndRegionQueryToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
