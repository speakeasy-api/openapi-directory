import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pkixpublickey as shared_pkixpublickey


@dataclass_json
@dataclasses.dataclass
class AttestorPublicKey:
    r"""AttestorPublicKey
    An attestor public key that will be used to verify attestations signed by this attestor.
    """
    
    ascii_armored_pgp_public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asciiArmoredPgpPublicKey') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pkix_public_key: Optional[shared_pkixpublickey.PkixPublicKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkixPublicKey') }})
    
