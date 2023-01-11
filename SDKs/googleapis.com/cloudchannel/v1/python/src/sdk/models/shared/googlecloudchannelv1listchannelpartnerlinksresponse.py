import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1channelpartnerlink as shared_googlecloudchannelv1channelpartnerlink


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListChannelPartnerLinksResponse:
    r"""GoogleCloudChannelV1ListChannelPartnerLinksResponse
    Response message for CloudChannelService.ListChannelPartnerLinks.
    """
    
    channel_partner_links: Optional[list[shared_googlecloudchannelv1channelpartnerlink.GoogleCloudChannelV1ChannelPartnerLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerLinks') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
