import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningquota as shared_provisioningquota


@dataclass_json
@dataclasses.dataclass
class ListProvisioningQuotasResponse:
    r"""ListProvisioningQuotasResponse
    Response message for the list of provisioning quotas.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    provisioning_quotas: Optional[list[shared_provisioningquota.ProvisioningQuota]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningQuotas') }})
    
