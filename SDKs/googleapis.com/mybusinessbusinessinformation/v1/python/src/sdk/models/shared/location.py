import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adwordslocationextensions as shared_adwordslocationextensions
from ..shared import categories as shared_categories
from ..shared import latlng as shared_latlng
from ..shared import morehours as shared_morehours
from ..shared import openinfo as shared_openinfo
from ..shared import phonenumbers as shared_phonenumbers
from ..shared import profile as shared_profile
from ..shared import businesshours as shared_businesshours
from ..shared import relationshipdata as shared_relationshipdata
from ..shared import serviceareabusiness as shared_serviceareabusiness
from ..shared import serviceitem as shared_serviceitem
from ..shared import specialhours as shared_specialhours
from ..shared import postaladdress as shared_postaladdress
from ..shared import categories as shared_categories
from ..shared import metadata as shared_metadata
from ..shared import openinfo as shared_openinfo


@dataclass_json
@dataclasses.dataclass
class LocationInput:
    r"""LocationInput
    A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    ad_words_location_extensions: Optional[shared_adwordslocationextensions.AdWordsLocationExtensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsLocationExtensions') }})
    categories: Optional[shared_categories.CategoriesInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    more_hours: Optional[list[shared_morehours.MoreHours]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[shared_openinfo.OpenInfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    phone_numbers: Optional[shared_phonenumbers.PhoneNumbers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    profile: Optional[shared_profile.Profile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[shared_businesshours.BusinessHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[shared_relationshipdata.RelationshipData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[shared_serviceareabusiness.ServiceAreaBusiness] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    service_items: Optional[list[shared_serviceitem.ServiceItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceItems') }})
    special_hours: Optional[shared_specialhours.SpecialHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    storefront_address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storefrontAddress') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    website_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUri') }})
    

@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    ad_words_location_extensions: Optional[shared_adwordslocationextensions.AdWordsLocationExtensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsLocationExtensions') }})
    categories: Optional[shared_categories.Categories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    metadata: Optional[shared_metadata.Metadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    more_hours: Optional[list[shared_morehours.MoreHours]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[shared_openinfo.OpenInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    phone_numbers: Optional[shared_phonenumbers.PhoneNumbers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    profile: Optional[shared_profile.Profile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[shared_businesshours.BusinessHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[shared_relationshipdata.RelationshipData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[shared_serviceareabusiness.ServiceAreaBusiness] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    service_items: Optional[list[shared_serviceitem.ServiceItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceItems') }})
    special_hours: Optional[shared_specialhours.SpecialHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    storefront_address: Optional[shared_postaladdress.PostalAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storefrontAddress') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    website_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUri') }})
    
