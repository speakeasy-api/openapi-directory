import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyobject as shared_keyobject


@dataclass_json
@dataclasses.dataclass
class KeyMaterial:
    crypto_alg: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoAlg') }})
    curve: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('curve') }})
    dh_public_key: shared_keyobject.KeyObject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhPublicKey') }})
    nonce: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    
