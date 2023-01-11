import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1customerrepricingconfig as shared_googlecloudchannelv1customerrepricingconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse:
    r"""GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
    Response message for CloudChannelService.ListCustomerRepricingConfigs.
    """
    
    customer_repricing_configs: Optional[list[shared_googlecloudchannelv1customerrepricingconfig.GoogleCloudChannelV1CustomerRepricingConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerRepricingConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
