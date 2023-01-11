import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelauditdetails as shared_channelauditdetails
from ..shared import channelbrandingsettings as shared_channelbrandingsettings
from ..shared import channelcontentdetails as shared_channelcontentdetails
from ..shared import channelcontentownerdetails as shared_channelcontentownerdetails
from ..shared import channelconversionpings as shared_channelconversionpings
from ..shared import channellocalization as shared_channellocalization
from ..shared import channelsnippet as shared_channelsnippet
from ..shared import channelstatistics as shared_channelstatistics
from ..shared import channelstatus as shared_channelstatus
from ..shared import channeltopicdetails as shared_channeltopicdetails


@dataclass_json
@dataclasses.dataclass
class Channel:
    r"""Channel
    A *channel* resource contains information about a YouTube channel.
    """
    
    audit_details: Optional[shared_channelauditdetails.ChannelAuditDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditDetails') }})
    branding_settings: Optional[shared_channelbrandingsettings.ChannelBrandingSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingSettings') }})
    content_details: Optional[shared_channelcontentdetails.ChannelContentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    content_owner_details: Optional[shared_channelcontentownerdetails.ChannelContentOwnerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOwnerDetails') }})
    conversion_pings: Optional[shared_channelconversionpings.ChannelConversionPings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionPings') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    localizations: Optional[dict[str, shared_channellocalization.ChannelLocalization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizations') }})
    snippet: Optional[shared_channelsnippet.ChannelSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    statistics: Optional[shared_channelstatistics.ChannelStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[shared_channelstatus.ChannelStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    topic_details: Optional[shared_channeltopicdetails.ChannelTopicDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicDetails') }})
    
