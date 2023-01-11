import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput:
    r"""GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput
    Private password leak verification info.
    """
    
    encrypted_user_credentials_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedUserCredentialsHash') }})
    lookup_hash_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookupHashPrefix') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification:
    r"""GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification
    Private password leak verification info.
    """
    
    encrypted_leak_match_prefixes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedLeakMatchPrefixes') }})
    encrypted_user_credentials_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedUserCredentialsHash') }})
    lookup_hash_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookupHashPrefix') }})
    reencrypted_user_credentials_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reencryptedUserCredentialsHash') }})
    
