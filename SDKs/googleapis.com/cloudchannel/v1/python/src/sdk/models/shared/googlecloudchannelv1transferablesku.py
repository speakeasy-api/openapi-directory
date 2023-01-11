import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1sku as shared_googlecloudchannelv1sku
from ..shared import googlecloudchannelv1transfereligibility as shared_googlecloudchannelv1transfereligibility


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1TransferableSku:
    r"""GoogleCloudChannelV1TransferableSku
    TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
    """
    
    legacy_sku: Optional[shared_googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacySku') }})
    sku: Optional[shared_googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    transfer_eligibility: Optional[shared_googlecloudchannelv1transfereligibility.GoogleCloudChannelV1TransferEligibility] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferEligibility') }})
    
