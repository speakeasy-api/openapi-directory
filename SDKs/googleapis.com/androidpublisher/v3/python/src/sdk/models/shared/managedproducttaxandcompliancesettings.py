import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionaltaxrateinfo as shared_regionaltaxrateinfo

class ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum(str, Enum):
    WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
    WITHDRAWAL_RIGHT_DIGITAL_CONTENT = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
    WITHDRAWAL_RIGHT_SERVICE = "WITHDRAWAL_RIGHT_SERVICE"


@dataclass_json
@dataclasses.dataclass
class ManagedProductTaxAndComplianceSettings:
    r"""ManagedProductTaxAndComplianceSettings
    Details about taxation and legal compliance for managed products.
    """
    
    eea_withdrawal_right_type: Optional[ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eeaWithdrawalRightType') }})
    tax_rate_info_by_region_code: Optional[dict[str, shared_regionaltaxrateinfo.RegionalTaxRateInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRateInfoByRegionCode') }})
    
