import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlordprofitlossrowmodel as shared_landlordprofitlossrowmodel


@dataclass_json
@dataclasses.dataclass
class LandlordProfitLossSectionModel:
    r"""LandlordProfitLossSectionModel
    Class for a group of entries.
    """
    
    rows: Optional[list[shared_landlordprofitlossrowmodel.LandlordProfitLossRowModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rows') }})
    
