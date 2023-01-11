import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import company as shared_company


@dataclass_json
@dataclasses.dataclass
class CreateCustomerRequestInput:
    r"""CreateCustomerRequestInput
    Request message to create a customer.
    """
    
    customer: Optional[shared_company.CompanyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    
