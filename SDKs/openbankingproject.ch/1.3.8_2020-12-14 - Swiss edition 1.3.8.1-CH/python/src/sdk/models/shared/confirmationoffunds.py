import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class ConfirmationOfFunds:
    r"""ConfirmationOfFunds
    JSON Request body for the \"Confirmation of funds service\".
    
    <table> 
    <tr> 
      <td>cardNumber</td> 
      <td>String </td>
      <td>Optional</td>
      <td>Card Number of the card issued by the PIISP. Should be delivered if available.</td>
    </tr>
    <tr>
      <td>account</td>
      <td> Account Reference</td>
      <td>Mandatory</td>
      <td>PSU's account number.</td>
    </tr>
    <tr>
      <td>payee</td>
      <td>Max70Text</td>
      <td>Optional</td>
      <td>The merchant where the card is accepted as an information to the PSU.</td>
    </tr>
    <tr>
      <td>instructedAmount</td>
      <td>Amount</td>
      <td>Mandatory</td>
      <td>Transaction amount to be checked within the funds check mechanism.</td>
    </tr>
    </table>
    
    """
    
    account: shared_accountreference16_ch.AccountReference16Ch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    instructed_amount: shared_amount.Amount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedAmount') }})
    card_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardNumber') }})
    payee: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee') }})
    
