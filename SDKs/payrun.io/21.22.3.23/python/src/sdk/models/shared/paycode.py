import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PayCodePayCodeNominalCode:
    r"""PayCodePayCodeNominalCode
    The pay codes' nominal code
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class PayCodePayCodeRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class PayCodePayCodeTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"

class PayCodePayCodeTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    PAYMENT = "Payment"
    DEDUCTION = "Deduction"


@dataclass_json
@dataclasses.dataclass
class PayCodePayCode:
    benefit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Benefit') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    meta_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetaData') }})
    niable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Niable') }})
    nominal_code: Optional[PayCodePayCodeNominalCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NominalCode') }})
    non_arrestable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonArrestable') }})
    notional: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notional') }})
    readonly: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Readonly') }})
    region: Optional[PayCodePayCodeRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    taxable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Taxable') }})
    territory: Optional[PayCodePayCodeTerritoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Territory') }})
    type: Optional[PayCodePayCodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclasses.dataclass
class PayCode:
    pay_code: Optional[PayCodePayCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayCode') }})
    
