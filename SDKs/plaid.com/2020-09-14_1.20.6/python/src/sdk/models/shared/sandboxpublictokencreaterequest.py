import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import products_enum as shared_products_enum
from ..shared import sandboxpublictokencreaterequestoptions as shared_sandboxpublictokencreaterequestoptions


@dataclass_json
@dataclasses.dataclass
class SandboxPublicTokenCreateRequest:
    r"""SandboxPublicTokenCreateRequest
    SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
    """
    
    initial_products: list[shared_products_enum.ProductsEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_products') }})
    institution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_sandboxpublictokencreaterequestoptions.SandboxPublicTokenCreateRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
