import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1price as shared_googlecloudchannelv1price
from ..shared import googlecloudchannelv1pricephase as shared_googlecloudchannelv1pricephase

class GoogleCloudChannelV1PriceByResourceResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    SEAT = "SEAT"
    MAU = "MAU"
    GB = "GB"
    LICENSED_USER = "LICENSED_USER"
    MINUTES = "MINUTES"
    IAAS_USAGE = "IAAS_USAGE"
    SUBSCRIPTION = "SUBSCRIPTION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1PriceByResource:
    r"""GoogleCloudChannelV1PriceByResource
    Represents price by resource type.
    """
    
    price: Optional[shared_googlecloudchannelv1price.GoogleCloudChannelV1Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_phases: Optional[list[shared_googlecloudchannelv1pricephase.GoogleCloudChannelV1PricePhase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricePhases') }})
    resource_type: Optional[GoogleCloudChannelV1PriceByResourceResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
