import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import customviewabilitymetric as shared_customviewabilitymetric
from ..shared import lookbackconfiguration as shared_lookbackconfiguration
from ..shared import omnituresettings as shared_omnituresettings
from ..shared import tagsettings as shared_tagsettings
from ..shared import thirdpartyauthenticationtoken as shared_thirdpartyauthenticationtoken
from ..shared import userdefinedvariableconfiguration as shared_userdefinedvariableconfiguration

class FloodlightConfigurationFirstDayOfWeekEnum(str, Enum):
    MONDAY = "MONDAY"
    SUNDAY = "SUNDAY"

class FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum(str, Enum):
    EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"


@dataclass_json
@dataclasses.dataclass
class FloodlightConfiguration:
    r"""FloodlightConfiguration
    Contains properties of a Floodlight configuration.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    analytics_data_sharing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsDataSharingEnabled') }})
    custom_viewability_metric: Optional[shared_customviewabilitymetric.CustomViewabilityMetric] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customViewabilityMetric') }})
    exposure_to_conversion_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposureToConversionEnabled') }})
    first_day_of_week: Optional[FloodlightConfigurationFirstDayOfWeekEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDayOfWeek') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    in_app_attribution_tracking_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inAppAttributionTrackingEnabled') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lookback_configuration: Optional[shared_lookbackconfiguration.LookbackConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackConfiguration') }})
    natural_search_conversion_attribution_option: Optional[FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naturalSearchConversionAttributionOption') }})
    omniture_settings: Optional[shared_omnituresettings.OmnitureSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omnitureSettings') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    tag_settings: Optional[shared_tagsettings.TagSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagSettings') }})
    third_party_authentication_tokens: Optional[list[shared_thirdpartyauthenticationtoken.ThirdPartyAuthenticationToken]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyAuthenticationTokens') }})
    user_defined_variable_configurations: Optional[list[shared_userdefinedvariableconfiguration.UserDefinedVariableConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedVariableConfigurations') }})
    
