import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExchangeRateInformation1RateTypeEnum(str, Enum):
    SPOT = "SPOT"
    SALE = "SALE"
    AGRD = "AGRD"


@dataclass_json
@dataclasses.dataclass
class ExchangeRateInformation1:
    r"""ExchangeRateInformation1
    as in ISO pain.001.001.03.ch.02 ExchangeRateInformation1
    """
    
    contract_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractIdentification') }})
    exchange_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeRate') }})
    rate_type: Optional[ExchangeRateInformation1RateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateType') }})
    
