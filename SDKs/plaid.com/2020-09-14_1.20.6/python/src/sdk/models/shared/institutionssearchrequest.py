import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import countrycode_enum as shared_countrycode_enum
from ..shared import institutionssearchrequestoptions as shared_institutionssearchrequestoptions
from ..shared import products_enum as shared_products_enum


@dataclass_json
@dataclasses.dataclass
class InstitutionsSearchRequest:
    r"""InstitutionsSearchRequest
    InstitutionsSearchRequest defines the request schema for `/institutions/search`
    """
    
    country_codes: list[shared_countrycode_enum.CountryCodeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    products: list[shared_products_enum.ProductsEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    query: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_institutionssearchrequestoptions.InstitutionsSearchRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
