import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import challengedata as shared_challengedata
from ..shared import chosenscamethod as shared_chosenscamethod
from ..shared import authenticationobject as shared_authenticationobject
from ..shared import transactionstatus_enum as shared_transactionstatus_enum


@dataclass_json
@dataclasses.dataclass
class PaymentInitiationCancelResponse202:
    r"""PaymentInitiationCancelResponse202
    Body of the response for a successful cancel payment request.
    """
    
    transaction_status: shared_transactionstatus_enum.TransactionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    challenge_data: Optional[shared_challengedata.ChallengeData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[shared_chosenscamethod.ChosenScaMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    sca_methods: Optional[list[shared_authenticationobject.AuthenticationObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaMethods') }})
    
