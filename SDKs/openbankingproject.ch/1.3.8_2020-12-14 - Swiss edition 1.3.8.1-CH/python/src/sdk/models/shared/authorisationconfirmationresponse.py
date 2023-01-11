import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import scastatusauthorisationconfirmation_enum as shared_scastatusauthorisationconfirmation_enum


@dataclass_json
@dataclasses.dataclass
class AuthorisationConfirmationResponse:
    r"""AuthorisationConfirmationResponse
    Body of the JSON response for an authorisation confirmation request.
    """
    
    links: dict[str, shared_hreftype.HrefType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    sca_status: shared_scastatusauthorisationconfirmation_enum.ScaStatusAuthorisationConfirmationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaStatus') }})
    psu_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    
