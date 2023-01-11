import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlordsummarytenancymodel as shared_landlordsummarytenancymodel


@dataclass_json
@dataclasses.dataclass
class LandlordSummaryModel:
    r"""LandlordSummaryModel
    Landlord Summary - Landing Page.
    """
    
    account_balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountBalance') }})
    last_payment: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPayment'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tenancies: Optional[list[shared_landlordsummarytenancymodel.LandlordSummaryTenancyModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancies') }})
    total_rent_arrears: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRentArrears') }})
    
