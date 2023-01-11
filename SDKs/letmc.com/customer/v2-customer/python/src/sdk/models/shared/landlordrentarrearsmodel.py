import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlordchasenotemodel as shared_landlordchasenotemodel
from ..shared import landlordrentoustandingitem as shared_landlordrentoustandingitem


@dataclass_json
@dataclasses.dataclass
class LandlordRentArrearsModel:
    r"""LandlordRentArrearsModel
    Landlord Rent Arrears.
    """
    
    chase_notes: Optional[list[shared_landlordchasenotemodel.LandlordChaseNoteModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChaseNotes') }})
    rent_collected: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RentCollected') }})
    rent_outstanding: Optional[list[shared_landlordrentoustandingitem.LandlordRentOustandingItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RentOutstanding') }})
    total_rent_arrears: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRentArrears') }})
    
