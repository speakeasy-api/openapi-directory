import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import envelope as shared_envelope
from ..shared import intotostatement as shared_intotostatement


@dataclass_json
@dataclasses.dataclass
class DsseAttestationOccurrence:
    r"""DsseAttestationOccurrence
    Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
    """
    
    envelope: Optional[shared_envelope.Envelope] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    statement: Optional[shared_intotostatement.InTotoStatement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statement') }})
    
