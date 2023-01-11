import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetCustomers302ApplicationJSON:
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    

@dataclasses.dataclass
class GetCustomersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customers_302_application_json_object: Optional[GetCustomers302ApplicationJSON] = dataclasses.field(default=None)
    
