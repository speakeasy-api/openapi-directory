import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemimportrequestoptions as shared_itemimportrequestoptions
from ..shared import products_enum as shared_products_enum
from ..shared import itemimportrequestuserauth as shared_itemimportrequestuserauth


@dataclass_json
@dataclasses.dataclass
class ItemImportRequest:
    r"""ItemImportRequest
    ItemImportRequest defines the request schema for `/item/import`
    """
    
    products: list[shared_products_enum.ProductsEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    user_auth: shared_itemimportrequestuserauth.ItemImportRequestUserAuth = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_auth') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_itemimportrequestoptions.ItemImportRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
