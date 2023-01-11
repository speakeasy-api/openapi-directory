import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendTokenRequestFlags:
    r"""SendTokenRequestFlags
    Object representing flags that potentialy modify this transaction
    """
    
    split_change: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitChange') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataEncryptions:
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    pubkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubkey') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataRulesExpiration:
    r"""SendTokenRequestMetadataRulesExpiration
    Object describing expiration rules of the token
    """
    
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    valid_until: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataRulesFeesItems:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataRulesFees:
    items: Optional[list[SendTokenRequestMetadataRulesFeesItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataRulesHolders:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataRules:
    r"""SendTokenRequestMetadataRules
    Object describing token rules
    """
    
    expiration: Optional[SendTokenRequestMetadataRulesExpiration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    fees: Optional[SendTokenRequestMetadataRulesFees] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    holders: Optional[list[SendTokenRequestMetadataRulesHolders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holders') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataUrls:
    data_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataHash') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataUserDataMeta:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadataUserData:
    r"""SendTokenRequestMetadataUserData
    Metadata set by user on token
    """
    
    meta: Optional[list[SendTokenRequestMetadataUserDataMeta]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestMetadata:
    r"""SendTokenRequestMetadata
    Object representing all metadata at token issuance
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryptions: Optional[list[SendTokenRequestMetadataEncryptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptions') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    rules: Optional[SendTokenRequestMetadataRules] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    token_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    urls: Optional[list[SendTokenRequestMetadataUrls]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_data: Optional[SendTokenRequestMetadataUserData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequestTo:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    

@dataclass_json
@dataclasses.dataclass
class SendTokenRequest:
    fee: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fee') }})
    to: list[SendTokenRequestTo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    flags: Optional[SendTokenRequestFlags] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    from_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    metadata: Optional[SendTokenRequestMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    sendutxo: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendutxo') }})
    
