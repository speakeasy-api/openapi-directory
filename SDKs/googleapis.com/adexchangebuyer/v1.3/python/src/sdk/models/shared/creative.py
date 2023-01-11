import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreativeAdTechnologyProviders:
    detected_provider_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedProviderIds') }})
    has_unidentified_provider: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUnidentifiedProvider') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeCorrections:
    details: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeDisapprovalReasons:
    details: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeFilteringReasonsReasons:
    filtering_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringCount') }})
    filtering_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeFilteringReasons:
    r"""CreativeFilteringReasons
    The filtering reasons for the creative. Read-only. This field should not be set in requests.
    """
    
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    reasons: Optional[list[CreativeFilteringReasonsReasons]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeNativeAdAppIcon:
    r"""CreativeNativeAdAppIcon
    The app icon, for app download ads.
    """
    
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeNativeAdImage:
    r"""CreativeNativeAdImage
    A large image.
    """
    
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeNativeAdLogo:
    r"""CreativeNativeAdLogo
    A smaller image, for the advertiser logo.
    """
    
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeNativeAd:
    r"""CreativeNativeAd
    If nativeAd is set, HTMLSnippet and videoURL should not be set.
    """
    
    advertiser: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiser') }})
    app_icon: Optional[CreativeNativeAdAppIcon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIcon') }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    call_to_action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callToAction') }})
    click_tracking_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTrackingUrl') }})
    headline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    image: Optional[CreativeNativeAdImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    impression_tracking_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionTrackingUrl') }})
    logo: Optional[CreativeNativeAdLogo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    price: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    star_rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starRating') }})
    

@dataclass_json
@dataclasses.dataclass
class Creative:
    r"""Creative
    A creative and its classification data.
    """
    
    html_snippet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HTMLSnippet') }})
    account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    ad_technology_providers: Optional[CreativeAdTechnologyProviders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adTechnologyProviders') }})
    advertiser_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserName') }})
    agency_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agencyId') }})
    api_upload_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiUploadTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    attribute: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    buyer_creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerCreativeId') }})
    click_through_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    corrections: Optional[list[CreativeCorrections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corrections') }})
    disapproval_reasons: Optional[list[CreativeDisapprovalReasons]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disapprovalReasons') }})
    filtering_reasons: Optional[CreativeFilteringReasons] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringReasons') }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    impression_tracking_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionTrackingUrl') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    native_ad: Optional[CreativeNativeAd] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeAd') }})
    product_categories: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCategories') }})
    restricted_categories: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedCategories') }})
    sensitive_categories: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategories') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    vendor_type: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendorType') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    video_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoURL') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
