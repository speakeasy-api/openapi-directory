import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import envelopesignature as shared_envelopesignature


@dataclass_json
@dataclasses.dataclass
class Envelope:
    r"""Envelope
    MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
    """
    
    payload: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    payload_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadType') }})
    signatures: Optional[list[shared_envelopesignature.EnvelopeSignature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatures') }})
    
