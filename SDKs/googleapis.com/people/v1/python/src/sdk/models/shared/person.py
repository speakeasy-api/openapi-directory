import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address
from ..shared import agerangetype as shared_agerangetype
from ..shared import biography as shared_biography
from ..shared import birthday as shared_birthday
from ..shared import braggingrights as shared_braggingrights
from ..shared import calendarurl as shared_calendarurl
from ..shared import clientdata as shared_clientdata
from ..shared import coverphoto as shared_coverphoto
from ..shared import emailaddress as shared_emailaddress
from ..shared import event as shared_event
from ..shared import externalid as shared_externalid
from ..shared import fileas as shared_fileas
from ..shared import gender as shared_gender
from ..shared import imclient as shared_imclient
from ..shared import interest as shared_interest
from ..shared import locale as shared_locale
from ..shared import location as shared_location
from ..shared import membership as shared_membership
from ..shared import personmetadata as shared_personmetadata
from ..shared import misckeyword as shared_misckeyword
from ..shared import name as shared_name
from ..shared import nickname as shared_nickname
from ..shared import occupation as shared_occupation
from ..shared import organization as shared_organization
from ..shared import phonenumber as shared_phonenumber
from ..shared import photo as shared_photo
from ..shared import relation as shared_relation
from ..shared import relationshipinterest as shared_relationshipinterest
from ..shared import relationshipstatus as shared_relationshipstatus
from ..shared import residence as shared_residence
from ..shared import sipaddress as shared_sipaddress
from ..shared import skill as shared_skill
from ..shared import tagline as shared_tagline
from ..shared import url as shared_url
from ..shared import userdefined as shared_userdefined
from ..shared import address as shared_address
from ..shared import biography as shared_biography
from ..shared import birthday as shared_birthday
from ..shared import braggingrights as shared_braggingrights
from ..shared import calendarurl as shared_calendarurl
from ..shared import clientdata as shared_clientdata
from ..shared import emailaddress as shared_emailaddress
from ..shared import event as shared_event
from ..shared import externalid as shared_externalid
from ..shared import fileas as shared_fileas
from ..shared import gender as shared_gender
from ..shared import imclient as shared_imclient
from ..shared import interest as shared_interest
from ..shared import locale as shared_locale
from ..shared import location as shared_location
from ..shared import membership as shared_membership
from ..shared import personmetadata as shared_personmetadata
from ..shared import misckeyword as shared_misckeyword
from ..shared import name as shared_name
from ..shared import nickname as shared_nickname
from ..shared import occupation as shared_occupation
from ..shared import organization as shared_organization
from ..shared import phonenumber as shared_phonenumber
from ..shared import relation as shared_relation
from ..shared import residence as shared_residence
from ..shared import sipaddress as shared_sipaddress
from ..shared import skill as shared_skill
from ..shared import url as shared_url
from ..shared import userdefined as shared_userdefined

class PersonAgeRangeEnum(str, Enum):
    AGE_RANGE_UNSPECIFIED = "AGE_RANGE_UNSPECIFIED"
    LESS_THAN_EIGHTEEN = "LESS_THAN_EIGHTEEN"
    EIGHTEEN_TO_TWENTY = "EIGHTEEN_TO_TWENTY"
    TWENTY_ONE_OR_OLDER = "TWENTY_ONE_OR_OLDER"


@dataclass_json
@dataclasses.dataclass
class Person:
    r"""Person
    Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
    """
    
    addresses: Optional[list[shared_address.Address]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    age_range: Optional[PersonAgeRangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRange') }})
    age_ranges: Optional[list[shared_agerangetype.AgeRangeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRanges') }})
    biographies: Optional[list[shared_biography.Biography]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biographies') }})
    birthdays: Optional[list[shared_birthday.Birthday]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthdays') }})
    bragging_rights: Optional[list[shared_braggingrights.BraggingRights]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('braggingRights') }})
    calendar_urls: Optional[list[shared_calendarurl.CalendarURL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarUrls') }})
    client_data: Optional[list[shared_clientdata.ClientData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    cover_photos: Optional[list[shared_coverphoto.CoverPhoto]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverPhotos') }})
    email_addresses: Optional[list[shared_emailaddress.EmailAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    external_ids: Optional[list[shared_externalid.ExternalID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIds') }})
    file_ases: Optional[list[shared_fileas.FileAs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileAses') }})
    genders: Optional[list[shared_gender.Gender]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genders') }})
    im_clients: Optional[list[shared_imclient.ImClient]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imClients') }})
    interests: Optional[list[shared_interest.Interest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interests') }})
    locales: Optional[list[shared_locale.Locale]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locales') }})
    locations: Optional[list[shared_location.Location]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    memberships: Optional[list[shared_membership.Membership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    metadata: Optional[shared_personmetadata.PersonMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    misc_keywords: Optional[list[shared_misckeyword.MiscKeyword]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miscKeywords') }})
    names: Optional[list[shared_name.Name]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    nicknames: Optional[list[shared_nickname.Nickname]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicknames') }})
    occupations: Optional[list[shared_occupation.Occupation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupations') }})
    organizations: Optional[list[shared_organization.Organization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    phone_numbers: Optional[list[shared_phonenumber.PhoneNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    photos: Optional[list[shared_photo.Photo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    relations: Optional[list[shared_relation.Relation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    relationship_interests: Optional[list[shared_relationshipinterest.RelationshipInterest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipInterests') }})
    relationship_statuses: Optional[list[shared_relationshipstatus.RelationshipStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipStatuses') }})
    residences: Optional[list[shared_residence.Residence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residences') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    sip_addresses: Optional[list[shared_sipaddress.SipAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sipAddresses') }})
    skills: Optional[list[shared_skill.Skill]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skills') }})
    taglines: Optional[list[shared_tagline.Tagline]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taglines') }})
    urls: Optional[list[shared_url.URL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_defined: Optional[list[shared_userdefined.UserDefined]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefined') }})
    

@dataclass_json
@dataclasses.dataclass
class PersonInput:
    r"""PersonInput
    Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
    """
    
    addresses: Optional[list[shared_address.AddressInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    biographies: Optional[list[shared_biography.BiographyInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biographies') }})
    birthdays: Optional[list[shared_birthday.BirthdayInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthdays') }})
    bragging_rights: Optional[list[shared_braggingrights.BraggingRightsInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('braggingRights') }})
    calendar_urls: Optional[list[shared_calendarurl.CalendarURLInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarUrls') }})
    client_data: Optional[list[shared_clientdata.ClientDataInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    email_addresses: Optional[list[shared_emailaddress.EmailAddressInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    events: Optional[list[shared_event.EventInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    external_ids: Optional[list[shared_externalid.ExternalIDInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIds') }})
    file_ases: Optional[list[shared_fileas.FileAsInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileAses') }})
    genders: Optional[list[shared_gender.GenderInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genders') }})
    im_clients: Optional[list[shared_imclient.ImClientInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imClients') }})
    interests: Optional[list[shared_interest.InterestInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interests') }})
    locales: Optional[list[shared_locale.LocaleInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locales') }})
    locations: Optional[list[shared_location.LocationInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    memberships: Optional[list[shared_membership.MembershipInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    metadata: Optional[shared_personmetadata.PersonMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    misc_keywords: Optional[list[shared_misckeyword.MiscKeywordInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miscKeywords') }})
    names: Optional[list[shared_name.NameInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    nicknames: Optional[list[shared_nickname.NicknameInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicknames') }})
    occupations: Optional[list[shared_occupation.OccupationInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupations') }})
    organizations: Optional[list[shared_organization.OrganizationInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    phone_numbers: Optional[list[shared_phonenumber.PhoneNumberInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    relations: Optional[list[shared_relation.RelationInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    residences: Optional[list[shared_residence.ResidenceInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residences') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    sip_addresses: Optional[list[shared_sipaddress.SipAddressInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sipAddresses') }})
    skills: Optional[list[shared_skill.SkillInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skills') }})
    urls: Optional[list[shared_url.URLInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_defined: Optional[list[shared_userdefined.UserDefinedInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefined') }})
    
