import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1transferablesku as shared_googlecloudchannelv1transferablesku


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListTransferableSkusResponse:
    r"""GoogleCloudChannelV1ListTransferableSkusResponse
    Response message for CloudChannelService.ListTransferableSkus.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transferable_skus: Optional[list[shared_googlecloudchannelv1transferablesku.GoogleCloudChannelV1TransferableSku]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferableSkus') }})
    
