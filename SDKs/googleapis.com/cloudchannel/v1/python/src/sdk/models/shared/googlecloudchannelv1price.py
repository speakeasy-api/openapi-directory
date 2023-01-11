import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypemoney as shared_googletypemoney


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Price:
    r"""GoogleCloudChannelV1Price
    Represents the price of the Offer.
    """
    
    base_price: Optional[shared_googletypemoney.GoogleTypeMoney] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePrice') }})
    discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    effective_price: Optional[shared_googletypemoney.GoogleTypeMoney] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectivePrice') }})
    external_price_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalPriceUri') }})
    
