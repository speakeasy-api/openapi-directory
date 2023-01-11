import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudcdnegressworkload as shared_cloudcdnegressworkload
from ..shared import cloudcdnworkload as shared_cloudcdnworkload
from ..shared import cloudinterconnectegressworkload as shared_cloudinterconnectegressworkload
from ..shared import cloudinterconnectworkload as shared_cloudinterconnectworkload
from ..shared import cloudstorageegressworkload as shared_cloudstorageegressworkload
from ..shared import cloudstorageworkload as shared_cloudstorageworkload
from ..shared import computevmworkload as shared_computevmworkload
from ..shared import premiumtieregressworkload as shared_premiumtieregressworkload
from ..shared import standardtieregressworkload as shared_standardtieregressworkload


@dataclass_json
@dataclasses.dataclass
class Workload:
    r"""Workload
    Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
    """
    
    cloud_cdn_egress_workload: Optional[shared_cloudcdnegressworkload.CloudCdnEgressWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudCdnEgressWorkload') }})
    cloud_cdn_workload: Optional[shared_cloudcdnworkload.CloudCdnWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudCdnWorkload') }})
    cloud_interconnect_egress_workload: Optional[shared_cloudinterconnectegressworkload.CloudInterconnectEgressWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudInterconnectEgressWorkload') }})
    cloud_interconnect_workload: Optional[shared_cloudinterconnectworkload.CloudInterconnectWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudInterconnectWorkload') }})
    cloud_storage_egress_workload: Optional[shared_cloudstorageegressworkload.CloudStorageEgressWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageEgressWorkload') }})
    cloud_storage_workload: Optional[shared_cloudstorageworkload.CloudStorageWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageWorkload') }})
    compute_vm_workload: Optional[shared_computevmworkload.ComputeVMWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeVmWorkload') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    premium_tier_egress_workload: Optional[shared_premiumtieregressworkload.PremiumTierEgressWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premiumTierEgressWorkload') }})
    standard_tier_egress_workload: Optional[shared_standardtieregressworkload.StandardTierEgressWorkload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardTierEgressWorkload') }})
    
