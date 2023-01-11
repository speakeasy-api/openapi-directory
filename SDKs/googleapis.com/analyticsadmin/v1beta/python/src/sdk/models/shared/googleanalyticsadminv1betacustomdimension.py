import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum(str, Enum):
    DIMENSION_SCOPE_UNSPECIFIED = "DIMENSION_SCOPE_UNSPECIFIED"
    EVENT = "EVENT"
    USER = "USER"


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaCustomDimension:
    r"""GoogleAnalyticsAdminV1betaCustomDimension
    A definition for a CustomDimension.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disallow_ads_personalization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowAdsPersonalization') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameter_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    scope: Optional[GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaCustomDimensionInput:
    r"""GoogleAnalyticsAdminV1betaCustomDimensionInput
    A definition for a CustomDimension.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disallow_ads_personalization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowAdsPersonalization') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    parameter_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    scope: Optional[GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
