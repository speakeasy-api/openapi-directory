import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Seller:
    r"""Seller
    Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    sub_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountId') }})
    

@dataclass_json
@dataclasses.dataclass
class SellerInput:
    r"""SellerInput
    Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    
