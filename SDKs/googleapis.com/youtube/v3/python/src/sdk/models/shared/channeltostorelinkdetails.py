import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelToStoreLinkDetails:
    r"""ChannelToStoreLinkDetails
    Information specific to a store on a merchandising platform linked to a YouTube channel.
    """
    
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    store_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeName') }})
    store_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeUrl') }})
    
