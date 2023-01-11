import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTokenMetadataResponseMetadataOfIssuanceDataUserData:
    r"""GetTokenMetadataResponseMetadataOfIssuanceDataUserData
    Metadata set by user on token
    """
    
    meta: Optional[list[GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTokenMetadataResponseMetadataOfIssuanceData:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    token_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    user_data: Optional[GetTokenMetadataResponseMetadataOfIssuanceDataUserData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTokenMetadataResponseMetadataOfIssuance:
    r"""GetTokenMetadataResponseMetadataOfIssuance
    Metadata set at issuance
    """
    
    data: Optional[GetTokenMetadataResponseMetadataOfIssuanceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTokenMetadataResponseMetadataOfUtxoUserData:
    r"""GetTokenMetadataResponseMetadataOfUtxoUserData
    Metadata set by user on token for UTXO
    """
    
    meta: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTokenMetadataResponseMetadataOfUtxo:
    r"""GetTokenMetadataResponseMetadataOfUtxo
    Metadata set for UTXO
    """
    
    user_data: Optional[GetTokenMetadataResponseMetadataOfUtxoUserData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTokenMetadataResponse:
    aggregation_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPolicy') }})
    divisibility: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisibility') }})
    first_block: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBlock') }})
    initial_issuance_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialIssuanceAmount') }})
    issuance_txid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuanceTxid') }})
    issue_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueAddress') }})
    lock_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    metadata_of_issuance: Optional[GetTokenMetadataResponseMetadataOfIssuance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataOfIssuance') }})
    metadata_of_utxo: Optional[GetTokenMetadataResponseMetadataOfUtxo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataOfUtxo') }})
    num_of_burns: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfBurns') }})
    num_of_holders: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfHolders') }})
    num_of_issuance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfIssuance') }})
    num_of_transfers: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfTransfers') }})
    some_utxo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('someUtxo') }})
    token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    total_supply: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSupply') }})
    
