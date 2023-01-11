import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestFlags:
    r"""IssueTokenRequestFlags
    Object representing flags that potentialy modify this transaction
    """
    
    split_change: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitChange') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataEncryptions:
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    pubkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubkey') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataRulesExpiration:
    r"""IssueTokenRequestMetadataRulesExpiration
    Object describing expiration rules of the token
    """
    
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    valid_until: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataRulesFeesItems:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataRulesFees:
    items: Optional[list[IssueTokenRequestMetadataRulesFeesItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataRulesHolders:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataRules:
    r"""IssueTokenRequestMetadataRules
    Object describing token rules
    """
    
    expiration: Optional[IssueTokenRequestMetadataRulesExpiration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    fees: Optional[IssueTokenRequestMetadataRulesFees] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    holders: Optional[list[IssueTokenRequestMetadataRulesHolders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holders') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataUrls:
    data_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataHash') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataUserDataMeta:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadataUserData:
    r"""IssueTokenRequestMetadataUserData
    Metadata set by user on token
    """
    
    meta: Optional[list[IssueTokenRequestMetadataUserDataMeta]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestMetadata:
    r"""IssueTokenRequestMetadata
    Object representing all metadata at token issuance
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryptions: Optional[list[IssueTokenRequestMetadataEncryptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptions') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    rules: Optional[IssueTokenRequestMetadataRules] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    token_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    urls: Optional[list[IssueTokenRequestMetadataUrls]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_data: Optional[IssueTokenRequestMetadataUserData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequestTransfer:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueTokenRequest:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    divisibility: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisibility') }})
    fee: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fee') }})
    issue_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueAddress') }})
    reissuable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reissuable') }})
    transfer: list[IssueTokenRequestTransfer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    flags: Optional[IssueTokenRequestFlags] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    metadata: Optional[IssueTokenRequestMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
