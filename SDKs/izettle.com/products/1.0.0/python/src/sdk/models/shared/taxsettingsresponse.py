import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TaxSettingsResponseTaxationModeEnum(str, Enum):
    EXCLUSIVE = "EXCLUSIVE"
    INCLUSIVE = "INCLUSIVE"

class TaxSettingsResponseTaxationTypeEnum(str, Enum):
    NONE = "NONE"
    SALES_TAX = "SALES_TAX"
    VAT = "VAT"


@dataclass_json
@dataclasses.dataclass
class TaxSettingsResponse:
    organization_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationUuid') }})
    taxation_mode: Optional[TaxSettingsResponseTaxationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxationMode') }})
    taxation_type: Optional[TaxSettingsResponseTaxationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxationType') }})
    
