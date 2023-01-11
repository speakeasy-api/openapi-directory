import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activities as shared_activities
from ..shared import customrichmediaevents as shared_customrichmediaevents
from ..shared import daterange as shared_daterange
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import sorteddimension as shared_sorteddimension
from ..shared import recipient as shared_recipient
from ..shared import channelgrouping as shared_channelgrouping
from ..shared import pathfilter as shared_pathfilter


@dataclass_json
@dataclasses.dataclass
class ReportCriteria:
    r"""ReportCriteria
    The report criteria for a report of type \"STANDARD\".
    """
    
    activities: Optional[shared_activities.Activities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    custom_rich_media_events: Optional[shared_customrichmediaevents.CustomRichMediaEvents] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    
class ReportCrossDimensionReachCriteriaDimensionEnum(str, Enum):
    ADVERTISER = "ADVERTISER"
    CAMPAIGN = "CAMPAIGN"
    SITE_BY_ADVERTISER = "SITE_BY_ADVERTISER"
    SITE_BY_CAMPAIGN = "SITE_BY_CAMPAIGN"


@dataclass_json
@dataclasses.dataclass
class ReportCrossDimensionReachCriteria:
    r"""ReportCrossDimensionReachCriteria
    The report criteria for a report of type \"CROSS_DIMENSION_REACH\".
    """
    
    breakdown: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakdown') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension: Optional[ReportCrossDimensionReachCriteriaDimensionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    dimension_filters: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    overlap_metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlapMetricNames') }})
    pivoted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivoted') }})
    
class ReportDeliveryEmailOwnerDeliveryTypeEnum(str, Enum):
    LINK = "LINK"
    ATTACHMENT = "ATTACHMENT"


@dataclass_json
@dataclasses.dataclass
class ReportDelivery:
    r"""ReportDelivery
    The report's email delivery settings.
    """
    
    email_owner: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailOwner') }})
    email_owner_delivery_type: Optional[ReportDeliveryEmailOwnerDeliveryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailOwnerDeliveryType') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    recipients: Optional[list[shared_recipient.Recipient]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportFloodlightCriteriaReportProperties:
    r"""ReportFloodlightCriteriaReportProperties
    The properties of the report.
    """
    
    include_attributed_ip_conversions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAttributedIPConversions') }})
    include_unattributed_cookie_conversions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedCookieConversions') }})
    include_unattributed_ip_conversions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedIPConversions') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportFloodlightCriteria:
    r"""ReportFloodlightCriteria
    The report criteria for a report of type \"FLOODLIGHT\".
    """
    
    custom_rich_media_events: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    floodlight_config_id: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigId') }})
    metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    report_properties: Optional[ReportFloodlightCriteriaReportProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportProperties') }})
    
class ReportFormatEnum(str, Enum):
    CSV = "CSV"
    EXCEL = "EXCEL"


@dataclass_json
@dataclasses.dataclass
class ReportPathAttributionCriteria:
    r"""ReportPathAttributionCriteria
    The report criteria for a report of type \"PATH_ATTRIBUTION\".
    """
    
    activity_filters: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityFilters') }})
    custom_channel_grouping: Optional[shared_channelgrouping.ChannelGrouping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customChannelGrouping') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimensions: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    floodlight_config_id: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigId') }})
    metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    path_filters: Optional[list[shared_pathfilter.PathFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathFilters') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportPathCriteria:
    r"""ReportPathCriteria
    The report criteria for a report of type \"PATH\".
    """
    
    activity_filters: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityFilters') }})
    custom_channel_grouping: Optional[shared_channelgrouping.ChannelGrouping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customChannelGrouping') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimensions: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    floodlight_config_id: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigId') }})
    metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    path_filters: Optional[list[shared_pathfilter.PathFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathFilters') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportPathToConversionCriteriaReportProperties:
    r"""ReportPathToConversionCriteriaReportProperties
    The properties of the report.
    """
    
    clicks_lookback_window: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicksLookbackWindow') }})
    impressions_lookback_window: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionsLookbackWindow') }})
    include_attributed_ip_conversions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAttributedIPConversions') }})
    include_unattributed_cookie_conversions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedCookieConversions') }})
    include_unattributed_ip_conversions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedIPConversions') }})
    maximum_click_interactions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumClickInteractions') }})
    maximum_impression_interactions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumImpressionInteractions') }})
    maximum_interaction_gap: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumInteractionGap') }})
    pivot_on_interaction_path: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotOnInteractionPath') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportPathToConversionCriteria:
    r"""ReportPathToConversionCriteria
    The report criteria for a report of type \"PATH_TO_CONVERSION\".
    """
    
    activity_filters: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityFilters') }})
    conversion_dimensions: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionDimensions') }})
    custom_floodlight_variables: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFloodlightVariables') }})
    custom_rich_media_events: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    floodlight_config_id: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigId') }})
    metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    per_interaction_dimensions: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perInteractionDimensions') }})
    report_properties: Optional[ReportPathToConversionCriteriaReportProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportProperties') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportReachCriteria:
    r"""ReportReachCriteria
    The report criteria for a report of type \"REACH\".
    """
    
    activities: Optional[shared_activities.Activities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    custom_rich_media_events: Optional[shared_customrichmediaevents.CustomRichMediaEvents] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[list[shared_sorteddimension.SortedDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    enable_all_dimension_combinations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAllDimensionCombinations') }})
    metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    reach_by_frequency_metric_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachByFrequencyMetricNames') }})
    
class ReportScheduleRepeatsOnWeekDaysEnum(str, Enum):
    SUNDAY = "SUNDAY"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"

class ReportScheduleRunsOnDayOfMonthEnum(str, Enum):
    DAY_OF_MONTH = "DAY_OF_MONTH"
    WEEK_OF_MONTH = "WEEK_OF_MONTH"


@dataclass_json
@dataclasses.dataclass
class ReportSchedule:
    r"""ReportSchedule
    The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not \"TODAY\".
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    every: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('every') }})
    expiration_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    repeats: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeats') }})
    repeats_on_week_days: Optional[list[ReportScheduleRepeatsOnWeekDaysEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatsOnWeekDays') }})
    runs_on_day_of_month: Optional[ReportScheduleRunsOnDayOfMonthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runsOnDayOfMonth') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class ReportTypeEnum(str, Enum):
    STANDARD = "STANDARD"
    REACH = "REACH"
    PATH_TO_CONVERSION = "PATH_TO_CONVERSION"
    CROSS_DIMENSION_REACH = "CROSS_DIMENSION_REACH"
    FLOODLIGHT = "FLOODLIGHT"
    PATH = "PATH"
    PATH_ATTRIBUTION = "PATH_ATTRIBUTION"


@dataclass_json
@dataclasses.dataclass
class Report:
    r"""Report
    Represents a Report resource.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    criteria: Optional[ReportCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    cross_dimension_reach_criteria: Optional[ReportCrossDimensionReachCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossDimensionReachCriteria') }})
    delivery: Optional[ReportDelivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    floodlight_criteria: Optional[ReportFloodlightCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightCriteria') }})
    format: Optional[ReportFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerProfileId') }})
    path_attribution_criteria: Optional[ReportPathAttributionCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathAttributionCriteria') }})
    path_criteria: Optional[ReportPathCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathCriteria') }})
    path_to_conversion_criteria: Optional[ReportPathToConversionCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathToConversionCriteria') }})
    reach_criteria: Optional[ReportReachCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachCriteria') }})
    schedule: Optional[ReportSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    sub_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountId') }})
    type: Optional[ReportTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
