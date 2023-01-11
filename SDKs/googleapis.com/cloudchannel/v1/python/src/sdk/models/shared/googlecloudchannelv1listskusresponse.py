import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1sku as shared_googlecloudchannelv1sku


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListSkusResponse:
    r"""GoogleCloudChannelV1ListSkusResponse
    Response message for ListSkus.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    skus: Optional[list[shared_googlecloudchannelv1sku.GoogleCloudChannelV1Sku]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skus') }})
    
