import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalcustomer as shared_sasportalcustomer


@dataclass_json
@dataclasses.dataclass
class SasPortalListCustomersResponse:
    r"""SasPortalListCustomersResponse
    Response for `ListCustomers`.
    """
    
    customers: Optional[list[shared_sasportalcustomer.SasPortalCustomer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
