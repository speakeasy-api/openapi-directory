import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportsconfiguration as shared_reportsconfiguration

class AccountAccountProfileEnum(str, Enum):
    ACCOUNT_PROFILE_BASIC = "ACCOUNT_PROFILE_BASIC"
    ACCOUNT_PROFILE_STANDARD = "ACCOUNT_PROFILE_STANDARD"

class AccountActiveAdsLimitTierEnum(str, Enum):
    ACTIVE_ADS_TIER_40_K = "ACTIVE_ADS_TIER_40K"
    ACTIVE_ADS_TIER_75_K = "ACTIVE_ADS_TIER_75K"
    ACTIVE_ADS_TIER_100_K = "ACTIVE_ADS_TIER_100K"
    ACTIVE_ADS_TIER_200_K = "ACTIVE_ADS_TIER_200K"
    ACTIVE_ADS_TIER_300_K = "ACTIVE_ADS_TIER_300K"
    ACTIVE_ADS_TIER_500_K = "ACTIVE_ADS_TIER_500K"
    ACTIVE_ADS_TIER_750_K = "ACTIVE_ADS_TIER_750K"
    ACTIVE_ADS_TIER_1_M = "ACTIVE_ADS_TIER_1M"


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    Contains properties of a Campaign Manager account.
    """
    
    account_permission_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountPermissionIds') }})
    account_profile: Optional[AccountAccountProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountProfile') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    active_ads_limit_tier: Optional[AccountActiveAdsLimitTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeAdsLimitTier') }})
    active_view_opt_out: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViewOptOut') }})
    available_permission_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availablePermissionIds') }})
    country_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryId') }})
    currency_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyId') }})
    default_creative_size_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCreativeSizeId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    maximum_image_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumImageSize') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nielsen_ocr_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nielsenOcrEnabled') }})
    reports_configuration: Optional[shared_reportsconfiguration.ReportsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportsConfiguration') }})
    share_reports_with_twitter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareReportsWithTwitter') }})
    teaser_size_limit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teaserSizeLimit') }})
    
