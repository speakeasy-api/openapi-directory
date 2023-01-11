import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EmployersSearchRequest:
    r"""EmployersSearchRequest
    EmployersSearchRequest defines the request schema for `/employers/search`.
    """
    
    products: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    query: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
