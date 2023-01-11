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
class TransactionResourceAttributesCashback:
    r"""TransactionResourceAttributesCashback
    Provides information about an instant reimbursement in the form of
    cashback.
    
    """
    
    amount: shared_moneyobject.MoneyObject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceAttributesForeignAmount:
    r"""TransactionResourceAttributesForeignAmount
    Provides information about a value of money.
    
    """
    
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceAttributesHoldInfoForeignAmount:
    r"""TransactionResourceAttributesHoldInfoForeignAmount
    Provides information about a value of money.
    
    """
    
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceAttributesHoldInfo:
    r"""TransactionResourceAttributesHoldInfo
    Provides information about the amount at which a transaction was in the
    `HELD` status.
    
    """
    
    amount: shared_moneyobject.MoneyObject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    foreign_amount: TransactionResourceAttributesHoldInfoForeignAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreignAmount') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceAttributesRoundUpBoostPortion:
    r"""TransactionResourceAttributesRoundUpBoostPortion
    Provides information about a value of money.
    
    """
    
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceAttributesRoundUp:
    r"""TransactionResourceAttributesRoundUp
    Provides information about how a Round Up was applied, such as whether or
    not a boost was included in the Round Up.
    
    """
    
    amount: shared_moneyobject.MoneyObject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    boost_portion: TransactionResourceAttributesRoundUpBoostPortion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('boostPortion') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceAttributes:
    amount: shared_moneyobject.MoneyObject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    cashback: TransactionResourceAttributesCashback = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashback') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    foreign_amount: TransactionResourceAttributesForeignAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreignAmount') }})
    hold_info: TransactionResourceAttributesHoldInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdInfo') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    raw_text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawText') }})
    round_up: TransactionResourceAttributesRoundUp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roundUp') }})
    settled_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settledAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceLinks:
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsAccountData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsAccountLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsAccount:
    data: TransactionResourceRelationshipsAccountData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsAccountLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsCategoryData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsCategoryLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsCategory:
    data: TransactionResourceRelationshipsCategoryData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsCategoryLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsParentCategoryData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsParentCategoryLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsParentCategory:
    data: TransactionResourceRelationshipsParentCategoryData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsParentCategoryLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsTagsData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsTagsLinks:
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationshipsTags:
    data: list[TransactionResourceRelationshipsTagsData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsTagsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResourceRelationships:
    account: TransactionResourceRelationshipsAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    category: TransactionResourceRelationshipsCategory = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    parent_category: TransactionResourceRelationshipsParentCategory = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCategory') }})
    tags: TransactionResourceRelationshipsTags = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResource:
    attributes: TransactionResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: TransactionResourceRelationships = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[TransactionResourceLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
