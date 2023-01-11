import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import countrycode_enum as shared_countrycode_enum
from ..shared import institutionsgetrequestoptions as shared_institutionsgetrequestoptions


@dataclass_json
@dataclasses.dataclass
class InstitutionsGetRequest:
    r"""InstitutionsGetRequest
    InstitutionsGetRequest defines the request schema for `/institutions/get`
    """
    
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    country_codes: list[shared_countrycode_enum.CountryCodeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_institutionsgetrequestoptions.InstitutionsGetRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
