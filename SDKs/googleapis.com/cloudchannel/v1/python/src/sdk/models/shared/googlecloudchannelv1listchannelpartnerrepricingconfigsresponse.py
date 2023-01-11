import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1channelpartnerrepricingconfig as shared_googlecloudchannelv1channelpartnerrepricingconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse:
    r"""GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
    Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
    """
    
    channel_partner_repricing_configs: Optional[list[shared_googlecloudchannelv1channelpartnerrepricingconfig.GoogleCloudChannelV1ChannelPartnerRepricingConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerRepricingConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
