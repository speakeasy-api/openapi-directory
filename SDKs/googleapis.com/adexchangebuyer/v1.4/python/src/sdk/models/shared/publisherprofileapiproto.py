import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobileapplication as shared_mobileapplication
from ..shared import publisherprovidedforecast as shared_publisherprovidedforecast
from ..shared import seller as shared_seller


@dataclass_json
@dataclasses.dataclass
class PublisherProfileAPIProto:
    audience: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    buyer_pitch_statement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPitchStatement') }})
    direct_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directContact') }})
    exchange: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    forecast_inventory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecastInventory') }})
    google_plus_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googlePlusLink') }})
    is_parent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isParent') }})
    is_published: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublished') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    media_kit_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaKitLink') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    overview: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    profile_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    programmatic_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticContact') }})
    publisher_app_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherAppIds') }})
    publisher_apps: Optional[list[shared_mobileapplication.MobileApplication]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherApps') }})
    publisher_domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherDomains') }})
    publisher_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfileId') }})
    publisher_provided_forecast: Optional[shared_publisherprovidedforecast.PublisherProvidedForecast] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProvidedForecast') }})
    rate_card_info_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateCardInfoLink') }})
    sample_page_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplePageLink') }})
    seller: Optional[shared_seller.Seller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    top_headlines: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topHeadlines') }})
    
