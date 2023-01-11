import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch


@dataclass_json
@dataclasses.dataclass
class AdditionalInformationAccess:
    r"""AdditionalInformationAccess
    Optional if supported by API provider.
    
    Is asking for additional information as added within this structured object.
    The usage of this data element requires at least one of the entries \"accounts\", 
    \"transactions\" or \"balances\" also to be contained in the object. 
    If detailed accounts are referenced, it is required in addition that any account addressed within 
    the additionalInformation attribute is also addressed by at least one of the attributes \"accounts\", 
    \"transactions\" or \"balances\".
    
    """
    
    owner_name: Optional[list[shared_accountreference16_ch.AccountReference16Ch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerName') }})
    trusted_beneficiaries: Optional[list[shared_accountreference16_ch.AccountReference16Ch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustedBeneficiaries') }})
    
