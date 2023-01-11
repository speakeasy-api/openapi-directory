import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exchangeconfigenabledexchange as shared_exchangeconfigenabledexchange


@dataclass_json
@dataclasses.dataclass
class ExchangeConfig:
    r"""ExchangeConfig
    Settings that control which exchanges are enabled for a partner.
    """
    
    enabled_exchanges: Optional[list[shared_exchangeconfigenabledexchange.ExchangeConfigEnabledExchange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledExchanges') }})
    
