import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channeltostorelinkdetails as shared_channeltostorelinkdetails

class ThirdPartyLinkSnippetTypeEnum(str, Enum):
    LINK_UNSPECIFIED = "linkUnspecified"
    CHANNEL_TO_STORE_LINK = "channelToStoreLink"


@dataclass_json
@dataclasses.dataclass
class ThirdPartyLinkSnippet:
    r"""ThirdPartyLinkSnippet
    Basic information about a third party account link, including its type and type-specific information.
    """
    
    channel_to_store_link: Optional[shared_channeltostorelinkdetails.ChannelToStoreLinkDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelToStoreLink') }})
    type: Optional[ThirdPartyLinkSnippetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
