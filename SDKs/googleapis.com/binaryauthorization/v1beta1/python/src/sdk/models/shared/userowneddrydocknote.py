import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attestorpublickey as shared_attestorpublickey


@dataclass_json
@dataclasses.dataclass
class UserOwnedDrydockNoteInput:
    r"""UserOwnedDrydockNoteInput
    An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
    """
    
    note_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteReference') }})
    public_keys: Optional[list[shared_attestorpublickey.AttestorPublicKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeys') }})
    

@dataclass_json
@dataclasses.dataclass
class UserOwnedDrydockNote:
    r"""UserOwnedDrydockNote
    An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
    """
    
    delegation_service_account_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegationServiceAccountEmail') }})
    note_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteReference') }})
    public_keys: Optional[list[shared_attestorpublickey.AttestorPublicKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeys') }})
    
