import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancequota as shared_instancequota

class ProvisioningQuotaAssetTypeEnum(str, Enum):
    ASSET_TYPE_UNSPECIFIED = "ASSET_TYPE_UNSPECIFIED"
    ASSET_TYPE_SERVER = "ASSET_TYPE_SERVER"
    ASSET_TYPE_STORAGE = "ASSET_TYPE_STORAGE"
    ASSET_TYPE_NETWORK = "ASSET_TYPE_NETWORK"


@dataclass_json
@dataclasses.dataclass
class ProvisioningQuota:
    r"""ProvisioningQuota
    A provisioning quota for a given project.
    """
    
    asset_type: Optional[ProvisioningQuotaAssetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    available_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableCount') }})
    gcp_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpService') }})
    instance_quota: Optional[shared_instancequota.InstanceQuota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceQuota') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_bandwidth: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkBandwidth') }})
    server_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCount') }})
    storage_gib: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageGib') }})
    
