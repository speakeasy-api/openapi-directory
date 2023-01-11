import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalfrequencyrange as shared_sasportalfrequencyrange


@dataclass_json
@dataclasses.dataclass
class SasPortalChannelWithScore:
    r"""SasPortalChannelWithScore
    The channel with score.
    """
    
    frequency_range: Optional[shared_sasportalfrequencyrange.SasPortalFrequencyRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyRange') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
