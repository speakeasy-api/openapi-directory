import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyusageoptions as shared_keyusageoptions
from ..shared import extendedkeyusageoptions as shared_extendedkeyusageoptions
from ..shared import objectid as shared_objectid


@dataclass_json
@dataclasses.dataclass
class KeyUsage:
    r"""KeyUsage
    A KeyUsage describes key usage values that may appear in an X.509 certificate.
    """
    
    base_key_usage: Optional[shared_keyusageoptions.KeyUsageOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseKeyUsage') }})
    extended_key_usage: Optional[shared_extendedkeyusageoptions.ExtendedKeyUsageOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedKeyUsage') }})
    unknown_extended_key_usages: Optional[list[shared_objectid.ObjectID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownExtendedKeyUsages') }})
    
