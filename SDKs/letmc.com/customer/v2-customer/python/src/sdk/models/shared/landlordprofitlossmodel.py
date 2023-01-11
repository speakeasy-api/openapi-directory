import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlordprofitlosssectionmodel as shared_landlordprofitlosssectionmodel


@dataclass_json
@dataclasses.dataclass
class LandlordProfitLossModel:
    r"""LandlordProfitLossModel
    Class to represent proffit loss report.
    """
    
    direct_costs: Optional[shared_landlordprofitlosssectionmodel.LandlordProfitLossSectionModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectCosts') }})
    gross_profit_loss: Optional[shared_landlordprofitlosssectionmodel.LandlordProfitLossSectionModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrossProfitLoss') }})
    income: Optional[shared_landlordprofitlosssectionmodel.LandlordProfitLossSectionModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Income') }})
    
