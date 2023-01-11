import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import challengedata as shared_challengedata
from ..shared import chosenscamethod as shared_chosenscamethod
from ..shared import authenticationobject as shared_authenticationobject
from ..shared import scastatus_enum as shared_scastatus_enum


@dataclass_json
@dataclasses.dataclass
class StartScaprocessResponse:
    r"""StartScaprocessResponse
    Body of the JSON response for a Start SCA authorisation request.
    """
    
    links: dict[str, shared_hreftype.HrefType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    authorisation_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorisationId') }})
    sca_status: shared_scastatus_enum.ScaStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaStatus') }})
    challenge_data: Optional[shared_challengedata.ChallengeData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[shared_chosenscamethod.ChosenScaMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    psu_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    sca_methods: Optional[list[shared_authenticationobject.AuthenticationObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaMethods') }})
    
