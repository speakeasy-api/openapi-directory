import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupCreateRequestBusinessDetailsEmployerTypeEnum(str, Enum):
    FOREIGN_GOVERNMENT = "foreign_government"
    PRIVATE_SECTOR = "private_sector"
    RELIGIOUS_EMPLOYER = "religious_employer"
    STATE_GOVERNMENT = "state_government"
    TRIBAL_GOVERNMENT = "tribal_government"

class GroupCreateRequestBusinessDetailsEntityTypeEnum(str, Enum):
    C_CORP = "c_corp"
    LLC = "llc"
    LLP = "llp"
    PARTNERSHIP = "partnership"
    S_CORP = "s_corp"


@dataclass_json
@dataclasses.dataclass
class GroupCreateRequestBusinessDetails:
    r"""GroupCreateRequestBusinessDetails
    Details about business or industry of the group
    """
    
    company_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_description') }})
    date_established: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_established'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employer_type: Optional[GroupCreateRequestBusinessDetailsEmployerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employer_type') }})
    entity_type: Optional[GroupCreateRequestBusinessDetailsEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    

@dataclass_json
@dataclasses.dataclass
class GroupCreateRequestInsuranceDetails:
    r"""GroupCreateRequestInsuranceDetails
    General details about the group insurance offerings
    """
    
    is_erisa_compliant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_erisa_compliant') }})
    is_erisa_subject: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_erisa_subject') }})
    

@dataclass_json
@dataclasses.dataclass
class GroupCreateRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    business_details: Optional[GroupCreateRequestBusinessDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_details') }})
    dba_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dba_name') }})
    federal_ein: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federal_ein') }})
    insurance_details: Optional[GroupCreateRequestInsuranceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_details') }})
    organization_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_id') }})
    sic_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sic_code') }})
    
