import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attestationoccurrence as shared_attestationoccurrence


@dataclass_json
@dataclasses.dataclass
class ValidateAttestationOccurrenceRequest:
    r"""ValidateAttestationOccurrenceRequest
    Request message for ValidationHelperV1.ValidateAttestationOccurrence.
    """
    
    attestation: Optional[shared_attestationoccurrence.AttestationOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    occurrence_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrenceNote') }})
    occurrence_resource_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrenceResourceUri') }})
    
