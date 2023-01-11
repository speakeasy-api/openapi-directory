import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import _linkssigningbasket as shared__linkssigningbasket
from ..shared import challengedata as shared_challengedata
from ..shared import chosenscamethod as shared_chosenscamethod
from ..shared import authenticationobject as shared_authenticationobject
from ..shared import tppmessage2xx as shared_tppmessage2xx
from ..shared import transactionstatus_sbs_enum as shared_transactionstatus_sbs_enum


@dataclass_json
@dataclasses.dataclass
class SigningBasketResponse201:
    r"""SigningBasketResponse201
    Body of the JSON response for a successful create signing basket request.
    """
    
    links: shared__linkssigningbasket.LinksSigningBasket = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    basket_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('basketId') }})
    transaction_status: shared_transactionstatus_sbs_enum.TransactionStatusSbsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    challenge_data: Optional[shared_challengedata.ChallengeData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[shared_chosenscamethod.ChosenScaMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    psu_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    sca_methods: Optional[list[shared_authenticationobject.AuthenticationObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaMethods') }})
    tpp_messages: Optional[list[shared_tppmessage2xx.TppMessage2Xx]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
