import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1parameter as shared_googlecloudchannelv1parameter


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ChangeOfferRequestInput:
    r"""GoogleCloudChannelV1ChangeOfferRequestInput
    Request message for CloudChannelService.ChangeOffer.
    """
    
    offer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    parameters: Optional[list[shared_googlecloudchannelv1parameter.GoogleCloudChannelV1ParameterInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    purchase_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
