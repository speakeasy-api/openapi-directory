import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import _linkssigningbasket as shared__linkssigningbasket
from ..shared import transactionstatus_sbs_enum as shared_transactionstatus_sbs_enum


@dataclass_json
@dataclasses.dataclass
class SigningBasketResponse200:
    r"""SigningBasketResponse200
    Body of the JSON response for a successful get signing basket request.
    
      * 'payments': payment initiations which shall be authorised through this signing basket.
      * 'consents': consent objects which shall be authorised through this signing basket.
      * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
      * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
    
    """
    
    transaction_status: shared_transactionstatus_sbs_enum.TransactionStatusSbsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    links: Optional[shared__linkssigningbasket.LinksSigningBasket] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    consents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consents') }})
    payments: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    
