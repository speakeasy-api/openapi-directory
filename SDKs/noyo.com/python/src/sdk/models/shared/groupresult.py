import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupResultBusinessDetailsEmployerTypeEnum(str, Enum):
    FOREIGN_GOVERNMENT = "foreign_government"
    PRIVATE_SECTOR = "private_sector"
    RELIGIOUS_EMPLOYER = "religious_employer"
    STATE_GOVERNMENT = "state_government"
    TRIBAL_GOVERNMENT = "tribal_government"

class GroupResultBusinessDetailsEntityTypeEnum(str, Enum):
    C_CORP = "c_corp"
    LLC = "llc"
    LLP = "llp"
    PARTNERSHIP = "partnership"
    S_CORP = "s_corp"


@dataclass_json
@dataclasses.dataclass
class GroupResultBusinessDetails:
    r"""GroupResultBusinessDetails
    Details about business or industry of the group
    """
    
    company_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_description') }})
    date_established: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_established') }})
    employer_type: Optional[GroupResultBusinessDetailsEmployerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employer_type') }})
    entity_type: Optional[GroupResultBusinessDetailsEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    

@dataclass_json
@dataclasses.dataclass
class GroupResultInsuranceDetails:
    r"""GroupResultInsuranceDetails
    General details about the group insurance offerings
    """
    
    is_erisa_compliant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_erisa_compliant') }})
    is_erisa_subject: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_erisa_subject') }})
    

@dataclass_json
@dataclasses.dataclass
class GroupResult:
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_id') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    business_details: Optional[GroupResultBusinessDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_details') }})
    dba_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dba_name') }})
    federal_ein: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federal_ein') }})
    insurance_details: Optional[GroupResultInsuranceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_details') }})
    sic_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sic_code') }})
    
