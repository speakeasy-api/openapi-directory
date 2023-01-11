import dataclasses
from typing import Optional
from ..shared import supportedcurrencyresponsev2 as shared_supportedcurrencyresponsev2


@dataclasses.dataclass
class ListSupportedCurrenciesV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supported_currency_response_v2: Optional[shared_supportedcurrencyresponsev2.SupportedCurrencyResponseV2] = dataclasses.field(default=None)
    
