import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1marketinginfo as shared_googlecloudchannelv1marketinginfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Product:
    r"""GoogleCloudChannelV1Product
    A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
    """
    
    marketing_info: Optional[shared_googlecloudchannelv1marketinginfo.GoogleCloudChannelV1MarketingInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
