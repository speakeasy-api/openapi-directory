import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adwordslocationextensions as shared_adwordslocationextensions
from ..shared import category as shared_category
from ..shared import postaladdress as shared_postaladdress
from ..shared import attribute as shared_attribute
from ..shared import latlng as shared_latlng
from ..shared import locationkey as shared_locationkey
from ..shared import locationstate as shared_locationstate
from ..shared import metadata as shared_metadata
from ..shared import morehours as shared_morehours
from ..shared import openinfo as shared_openinfo
from ..shared import pricelist as shared_pricelist
from ..shared import profile as shared_profile
from ..shared import businesshours as shared_businesshours
from ..shared import relationshipdata as shared_relationshipdata
from ..shared import serviceareabusiness as shared_serviceareabusiness
from ..shared import specialhours as shared_specialhours
from ..shared import category as shared_category
from ..shared import locationstate as shared_locationstate


@dataclass_json
@dataclasses.dataclass
class LocationInput:
    r"""LocationInput
    A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    ad_words_location_extensions: Optional[shared_adwordslocationextensions.AdWordsLocationExtensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsLocationExtensions') }})
    additional_categories: Optional[list[shared_category.CategoryInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    additional_phones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalPhones') }})
    address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    location_key: Optional[shared_locationkey.LocationKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationKey') }})
    location_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    location_state: Optional[shared_locationstate.LocationStateInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationState') }})
    metadata: Optional[shared_metadata.Metadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    more_hours: Optional[list[shared_morehours.MoreHours]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[shared_openinfo.OpenInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    price_lists: Optional[list[shared_pricelist.PriceList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceLists') }})
    primary_category: Optional[shared_category.CategoryInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    primary_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    profile: Optional[shared_profile.Profile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[shared_businesshours.BusinessHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[shared_relationshipdata.RelationshipData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[shared_serviceareabusiness.ServiceAreaBusiness] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    special_hours: Optional[shared_specialhours.SpecialHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    website_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    

@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    ad_words_location_extensions: Optional[shared_adwordslocationextensions.AdWordsLocationExtensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsLocationExtensions') }})
    additional_categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    additional_phones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalPhones') }})
    address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    location_key: Optional[shared_locationkey.LocationKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationKey') }})
    location_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    location_state: Optional[shared_locationstate.LocationState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationState') }})
    metadata: Optional[shared_metadata.Metadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    more_hours: Optional[list[shared_morehours.MoreHours]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[shared_openinfo.OpenInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    price_lists: Optional[list[shared_pricelist.PriceList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceLists') }})
    primary_category: Optional[shared_category.Category] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    primary_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    profile: Optional[shared_profile.Profile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[shared_businesshours.BusinessHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[shared_relationshipdata.RelationshipData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[shared_serviceareabusiness.ServiceAreaBusiness] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    special_hours: Optional[shared_specialhours.SpecialHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    website_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    
