import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import clickthroughurl as shared_clickthroughurl
from ..shared import clickthroughurlsuffixproperties as shared_clickthroughurlsuffixproperties
from ..shared import lastmodifiedinfo as shared_lastmodifiedinfo
from ..shared import creativegroupassignment as shared_creativegroupassignment
from ..shared import creativerotation as shared_creativerotation
from ..shared import dayparttargeting as shared_dayparttargeting
from ..shared import defaultclickthrougheventtagproperties as shared_defaultclickthrougheventtagproperties
from ..shared import deliveryschedule as shared_deliveryschedule
from ..shared import eventtagoverride as shared_eventtagoverride
from ..shared import geotargeting as shared_geotargeting
from ..shared import keyvaluetargetingexpression as shared_keyvaluetargetingexpression
from ..shared import languagetargeting as shared_languagetargeting
from ..shared import placementassignment as shared_placementassignment
from ..shared import listtargetingexpression as shared_listtargetingexpression
from ..shared import size as shared_size
from ..shared import technologytargeting as shared_technologytargeting

class AdCompatibilityEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class AdTypeEnum(str, Enum):
    AD_SERVING_STANDARD_AD = "AD_SERVING_STANDARD_AD"
    AD_SERVING_DEFAULT_AD = "AD_SERVING_DEFAULT_AD"
    AD_SERVING_CLICK_TRACKER = "AD_SERVING_CLICK_TRACKER"
    AD_SERVING_TRACKING = "AD_SERVING_TRACKING"
    AD_SERVING_BRAND_SAFE_AD = "AD_SERVING_BRAND_SAFE_AD"


@dataclass_json
@dataclasses.dataclass
class Ad:
    r"""Ad
    Contains properties of a Campaign Manager ad.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    audience_segment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceSegmentId') }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    campaign_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignIdDimensionValue') }})
    click_through_url: Optional[shared_clickthroughurl.ClickThroughURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    click_through_url_suffix_properties: Optional[shared_clickthroughurlsuffixproperties.ClickThroughURLSuffixProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrlSuffixProperties') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    compatibility: Optional[AdCompatibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    create_info: Optional[shared_lastmodifiedinfo.LastModifiedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createInfo') }})
    creative_group_assignments: Optional[list[shared_creativegroupassignment.CreativeGroupAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupAssignments') }})
    creative_rotation: Optional[shared_creativerotation.CreativeRotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeRotation') }})
    day_part_targeting: Optional[shared_dayparttargeting.DayPartTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargeting') }})
    default_click_through_event_tag_properties: Optional[shared_defaultclickthrougheventtagproperties.DefaultClickThroughEventTagProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultClickThroughEventTagProperties') }})
    delivery_schedule: Optional[shared_deliveryschedule.DeliverySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliverySchedule') }})
    dynamic_click_tracker: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicClickTracker') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_tag_overrides: Optional[list[shared_eventtagoverride.EventTagOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTagOverrides') }})
    geo_targeting: Optional[shared_geotargeting.GeoTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    key_value_targeting_expression: Optional[shared_keyvaluetargetingexpression.KeyValueTargetingExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValueTargetingExpression') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language_targeting: Optional[shared_languagetargeting.LanguageTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageTargeting') }})
    last_modified_info: Optional[shared_lastmodifiedinfo.LastModifiedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    placement_assignments: Optional[list[shared_placementassignment.PlacementAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementAssignments') }})
    remarketing_list_expression: Optional[shared_listtargetingexpression.ListTargetingExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remarketingListExpression') }})
    size: Optional[shared_size.Size] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssl_compliant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCompliant') }})
    ssl_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslRequired') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    targeting_template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingTemplateId') }})
    technology_targeting: Optional[shared_technologytargeting.TechnologyTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    type: Optional[AdTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
