import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CisLineTypeCisLineTypeNominalCode:
    r"""CisLineTypeCisLineTypeNominalCode
    The cis line types' nominal code
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class CisLineTypeCisLineTypeTaxTreatmentEnum(str, Enum):
    TAXABLE = "Taxable"
    NON_TAXABLE = "NonTaxable"
    NOTIONAL = "Notional"
    MATERIALS = "Materials"


@dataclass_json
@dataclasses.dataclass
class CisLineTypeCisLineType:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    line_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineType') }})
    nominal_code: Optional[CisLineTypeCisLineTypeNominalCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NominalCode') }})
    tax_treatment: Optional[CisLineTypeCisLineTypeTaxTreatmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxTreatment') }})
    

@dataclass_json
@dataclasses.dataclass
class CisLineType:
    cis_line_type: Optional[CisLineTypeCisLineType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisLineType') }})
    
