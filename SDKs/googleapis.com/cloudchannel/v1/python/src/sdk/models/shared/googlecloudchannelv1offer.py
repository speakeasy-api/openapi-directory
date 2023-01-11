import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1constraints as shared_googlecloudchannelv1constraints
from ..shared import googlecloudchannelv1marketinginfo as shared_googlecloudchannelv1marketinginfo
from ..shared import googlecloudchannelv1parameterdefinition as shared_googlecloudchannelv1parameterdefinition
from ..shared import googlecloudchannelv1plan as shared_googlecloudchannelv1plan
from ..shared import googlecloudchannelv1pricebyresource as shared_googlecloudchannelv1pricebyresource
from ..shared import googlecloudchannelv1sku as shared_googlecloudchannelv1sku


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Offer:
    r"""GoogleCloudChannelV1Offer
    Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
    """
    
    constraints: Optional[shared_googlecloudchannelv1constraints.GoogleCloudChannelV1Constraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    deal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealCode') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    marketing_info: Optional[shared_googlecloudchannelv1marketinginfo.GoogleCloudChannelV1MarketingInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameter_definitions: Optional[list[shared_googlecloudchannelv1parameterdefinition.GoogleCloudChannelV1ParameterDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterDefinitions') }})
    plan: Optional[shared_googlecloudchannelv1plan.GoogleCloudChannelV1Plan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    price_by_resources: Optional[list[shared_googlecloudchannelv1pricebyresource.GoogleCloudChannelV1PriceByResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceByResources') }})
    sku: Optional[shared_googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
