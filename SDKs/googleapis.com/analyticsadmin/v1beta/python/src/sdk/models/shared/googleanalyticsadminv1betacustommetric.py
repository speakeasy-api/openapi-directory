import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum(str, Enum):
    MEASUREMENT_UNIT_UNSPECIFIED = "MEASUREMENT_UNIT_UNSPECIFIED"
    STANDARD = "STANDARD"
    CURRENCY = "CURRENCY"
    FEET = "FEET"
    METERS = "METERS"
    KILOMETERS = "KILOMETERS"
    MILES = "MILES"
    MILLISECONDS = "MILLISECONDS"
    SECONDS = "SECONDS"
    MINUTES = "MINUTES"
    HOURS = "HOURS"

class GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum(str, Enum):
    RESTRICTED_METRIC_TYPE_UNSPECIFIED = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
    COST_DATA = "COST_DATA"
    REVENUE_DATA = "REVENUE_DATA"

class GoogleAnalyticsAdminV1betaCustomMetricScopeEnum(str, Enum):
    METRIC_SCOPE_UNSPECIFIED = "METRIC_SCOPE_UNSPECIFIED"
    EVENT = "EVENT"


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaCustomMetric:
    r"""GoogleAnalyticsAdminV1betaCustomMetric
    A definition for a custom metric.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    measurement_unit: Optional[GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementUnit') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameter_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    restricted_metric_type: Optional[list[GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedMetricType') }})
    scope: Optional[GoogleAnalyticsAdminV1betaCustomMetricScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaCustomMetricInput:
    r"""GoogleAnalyticsAdminV1betaCustomMetricInput
    A definition for a custom metric.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    measurement_unit: Optional[GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementUnit') }})
    parameter_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    restricted_metric_type: Optional[list[GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedMetricType') }})
    scope: Optional[GoogleAnalyticsAdminV1betaCustomMetricScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
