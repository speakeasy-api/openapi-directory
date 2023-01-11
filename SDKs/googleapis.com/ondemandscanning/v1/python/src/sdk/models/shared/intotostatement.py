import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import intotoprovenance as shared_intotoprovenance
from ..shared import slsaprovenance as shared_slsaprovenance
from ..shared import slsaprovenancezerotwo as shared_slsaprovenancezerotwo
from ..shared import subject as shared_subject


@dataclass_json
@dataclasses.dataclass
class InTotoStatement:
    r"""InTotoStatement
    Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always \"application/vnd.in-toto+json\".
    """
    
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_type') }})
    predicate_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predicateType') }})
    provenance: Optional[shared_intotoprovenance.InTotoProvenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    slsa_provenance: Optional[shared_slsaprovenance.SlsaProvenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slsaProvenance') }})
    slsa_provenance_zero_two: Optional[shared_slsaprovenancezerotwo.SlsaProvenanceZeroTwo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slsaProvenanceZeroTwo') }})
    subject: Optional[list[shared_subject.Subject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
