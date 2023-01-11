import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obcashaccount5 as shared_obcashaccount5
from ..shared import obexternalaccountsubtype1code_enum as shared_obexternalaccountsubtype1code_enum
from ..shared import obexternalaccounttype1code_enum as shared_obexternalaccounttype1code_enum
from ..shared import obbranchandfinancialinstitutionidentification5 as shared_obbranchandfinancialinstitutionidentification5


@dataclass_json
@dataclasses.dataclass
class ObAccount6:
    r"""ObAccount6
    Unambiguous identification of the account to which credit and debit entries are made.
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    account_sub_type: shared_obexternalaccountsubtype1code_enum.ObExternalAccountSubType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountSubType') }})
    account_type: shared_obexternalaccounttype1code_enum.ObExternalAccountType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountType') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    account: Optional[list[shared_obcashaccount5.ObCashAccount5]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nickname') }})
    opening_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    servicer: Optional[shared_obbranchandfinancialinstitutionidentification5.ObBranchAndFinancialInstitutionIdentification5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Servicer') }})
    
