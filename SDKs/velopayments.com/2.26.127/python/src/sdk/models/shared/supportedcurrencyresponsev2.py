import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import supportedcurrencyv2 as shared_supportedcurrencyv2


@dataclass_json
@dataclasses.dataclass
class SupportedCurrencyResponseV2:
    currencies: Optional[list[shared_supportedcurrencyv2.SupportedCurrencyV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencies') }})
    
