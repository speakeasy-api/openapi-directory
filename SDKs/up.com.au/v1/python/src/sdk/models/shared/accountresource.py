import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import moneyobject as shared_moneyobject


@dataclass_json
@dataclasses.dataclass
class AccountResourceAttributes:
    account_type: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    balance: shared_moneyobject.MoneyObject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountResourceLinks:
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountResourceRelationshipsTransactionsLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountResourceRelationshipsTransactions:
    links: Optional[AccountResourceRelationshipsTransactionsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountResourceRelationships:
    transactions: AccountResourceRelationshipsTransactions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountResource:
    r"""AccountResource
    Provides information about an Up bank account.
    
    """
    
    attributes: AccountResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: AccountResourceRelationships = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[AccountResourceLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
