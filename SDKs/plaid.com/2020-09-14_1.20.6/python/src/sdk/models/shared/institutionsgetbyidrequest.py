import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import countrycode_enum as shared_countrycode_enum
from ..shared import institutionsgetbyidrequestoptions as shared_institutionsgetbyidrequestoptions


@dataclass_json
@dataclasses.dataclass
class InstitutionsGetByIDRequest:
    r"""InstitutionsGetByIDRequest
    InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
    """
    
    country_codes: list[shared_countrycode_enum.CountryCodeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    institution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_institutionsgetbyidrequestoptions.InstitutionsGetByIDRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
