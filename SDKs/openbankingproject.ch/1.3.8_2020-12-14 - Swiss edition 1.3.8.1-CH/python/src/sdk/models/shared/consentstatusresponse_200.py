import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consentstatus_enum as shared_consentstatus_enum


@dataclass_json
@dataclasses.dataclass
class ConsentStatusResponse200:
    r"""ConsentStatusResponse200
    Body of the JSON response for a successful get status request for a consent.
    """
    
    consent_status: shared_consentstatus_enum.ConsentStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentStatus') }})
    psu_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    
