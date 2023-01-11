import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActivityContentDetailsPromotedItemCtaTypeEnum(str, Enum):
    CTA_TYPE_UNSPECIFIED = "ctaTypeUnspecified"
    VISIT_ADVERTISER_SITE = "visitAdvertiserSite"


@dataclass_json
@dataclasses.dataclass
class ActivityContentDetailsPromotedItem:
    r"""ActivityContentDetailsPromotedItem
    Details about a resource which is being promoted.
    """
    
    ad_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adTag') }})
    click_tracking_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTrackingUrl') }})
    creative_view_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeViewUrl') }})
    cta_type: Optional[ActivityContentDetailsPromotedItemCtaTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ctaType') }})
    custom_cta_button_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customCtaButtonText') }})
    description_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptionText') }})
    destination_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUrl') }})
    forecasting_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecastingUrl') }})
    impression_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionUrl') }})
    video_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
