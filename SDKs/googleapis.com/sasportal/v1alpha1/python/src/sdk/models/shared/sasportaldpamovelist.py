import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalfrequencyrange as shared_sasportalfrequencyrange


@dataclass_json
@dataclasses.dataclass
class SasPortalDpaMoveList:
    r"""SasPortalDpaMoveList
    An entry in a DPA's move list.
    """
    
    dpa_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpaId') }})
    frequency_range: Optional[shared_sasportalfrequencyrange.SasPortalFrequencyRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyRange') }})
    
