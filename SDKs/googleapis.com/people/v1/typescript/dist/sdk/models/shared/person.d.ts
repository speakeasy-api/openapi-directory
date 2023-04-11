import { SpeakeasyBase } from "../../../internal/utils";
import { Address, AddressInput } from "./address";
import { AgeRangeType } from "./agerangetype";
import { Biography, BiographyInput } from "./biography";
import { Birthday, BirthdayInput } from "./birthday";
import { BraggingRights, BraggingRightsInput } from "./braggingrights";
import { CalendarUrl, CalendarUrlInput } from "./calendarurl";
import { ClientData, ClientDataInput } from "./clientdata";
import { CoverPhoto } from "./coverphoto";
import { EmailAddress, EmailAddressInput } from "./emailaddress";
import { Event, EventInput } from "./event";
import { ExternalId, ExternalIdInput } from "./externalid";
import { FileAs, FileAsInput } from "./fileas";
import { Gender, GenderInput } from "./gender";
import { ImClient, ImClientInput } from "./imclient";
import { Interest, InterestInput } from "./interest";
import { Locale, LocaleInput } from "./locale";
import { Location, LocationInput } from "./location";
import { Membership, MembershipInput } from "./membership";
import { MiscKeyword, MiscKeywordInput } from "./misckeyword";
import { Name, NameInput } from "./name";
import { Nickname, NicknameInput } from "./nickname";
import { Occupation, OccupationInput } from "./occupation";
import { Organization, OrganizationInput } from "./organization";
import { PersonMetadata, PersonMetadataInput } from "./personmetadata";
import { PhoneNumber, PhoneNumberInput } from "./phonenumber";
import { Photo } from "./photo";
import { Relation, RelationInput } from "./relation";
import { RelationshipInterest } from "./relationshipinterest";
import { RelationshipStatus } from "./relationshipstatus";
import { Residence, ResidenceInput } from "./residence";
import { SipAddress, SipAddressInput } from "./sipaddress";
import { Skill, SkillInput } from "./skill";
import { Tagline } from "./tagline";
import { Url, UrlInput } from "./url";
import { UserDefined, UserDefinedInput } from "./userdefined";
/**
 * Output only. **DEPRECATED** (Please use `person.ageRanges` instead) The person's age range.
 */
export declare enum PersonAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    LessThanEighteen = "LESS_THAN_EIGHTEEN",
    EighteenToTwenty = "EIGHTEEN_TO_TWENTY",
    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
 */
export declare class Person extends SpeakeasyBase {
    /**
     * The person's street addresses.
     */
    addresses?: Address[];
    /**
     * Output only. **DEPRECATED** (Please use `person.ageRanges` instead) The person's age range.
     */
    ageRange?: PersonAgeRangeEnum;
    /**
     * Output only. The person's age ranges.
     */
    ageRanges?: AgeRangeType[];
    /**
     * The person's biographies. This field is a singleton for contact sources.
     */
    biographies?: Biography[];
    /**
     * The person's birthdays. This field is a singleton for contact sources.
     */
    birthdays?: Birthday[];
    /**
     * **DEPRECATED**: No data will be returned The person's bragging rights.
     */
    braggingRights?: BraggingRights[];
    /**
     * The person's calendar URLs.
     */
    calendarUrls?: CalendarUrl[];
    /**
     * The person's client data.
     */
    clientData?: ClientData[];
    /**
     * Output only. The person's cover photos.
     */
    coverPhotos?: CoverPhoto[];
    /**
     * The person's email addresses. For `people.connections.list` and `otherContacts.list` the number of email addresses is limited to 100. If a Person has more email addresses the entire set can be obtained by calling GetPeople.
     */
    emailAddresses?: EmailAddress[];
    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
     */
    etag?: string;
    /**
     * The person's events.
     */
    events?: Event[];
    /**
     * The person's external IDs.
     */
    externalIds?: ExternalId[];
    /**
     * The person's file-ases.
     */
    fileAses?: FileAs[];
    /**
     * The person's genders. This field is a singleton for contact sources.
     */
    genders?: Gender[];
    /**
     * The person's instant messaging clients.
     */
    imClients?: ImClient[];
    /**
     * The person's interests.
     */
    interests?: Interest[];
    /**
     * The person's locale preferences.
     */
    locales?: Locale[];
    /**
     * The person's locations.
     */
    locations?: Location[];
    /**
     * The person's group memberships.
     */
    memberships?: Membership[];
    /**
     * The metadata about a person.
     */
    metadata?: PersonMetadata;
    /**
     * The person's miscellaneous keywords.
     */
    miscKeywords?: MiscKeyword[];
    /**
     * The person's names. This field is a singleton for contact sources.
     */
    names?: Name[];
    /**
     * The person's nicknames.
     */
    nicknames?: Nickname[];
    /**
     * The person's occupations.
     */
    occupations?: Occupation[];
    /**
     * The person's past or current organizations.
     */
    organizations?: Organization[];
    /**
     * The person's phone numbers. For `people.connections.list` and `otherContacts.list` the number of phone numbers is limited to 100. If a Person has more phone numbers the entire set can be obtained by calling GetPeople.
     */
    phoneNumbers?: PhoneNumber[];
    /**
     * Output only. The person's photos.
     */
    photos?: Photo[];
    /**
     * The person's relations.
     */
    relations?: Relation[];
    /**
     * Output only. **DEPRECATED**: No data will be returned The person's relationship interests.
     */
    relationshipInterests?: RelationshipInterest[];
    /**
     * Output only. **DEPRECATED**: No data will be returned The person's relationship statuses.
     */
    relationshipStatuses?: RelationshipStatus[];
    /**
     * **DEPRECATED**: (Please use `person.locations` instead) The person's residences.
     */
    residences?: Residence[];
    /**
     * The resource name for the person, assigned by the server. An ASCII string in the form of `people/{person_id}`.
     */
    resourceName?: string;
    /**
     * The person's SIP addresses.
     */
    sipAddresses?: SipAddress[];
    /**
     * The person's skills.
     */
    skills?: Skill[];
    /**
     * Output only. **DEPRECATED**: No data will be returned The person's taglines.
     */
    taglines?: Tagline[];
    /**
     * The person's associated URLs.
     */
    urls?: Url[];
    /**
     * The person's user defined data.
     */
    userDefined?: UserDefined[];
}
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
 */
export declare class PersonInput extends SpeakeasyBase {
    /**
     * The person's street addresses.
     */
    addresses?: AddressInput[];
    /**
     * The person's biographies. This field is a singleton for contact sources.
     */
    biographies?: BiographyInput[];
    /**
     * The person's birthdays. This field is a singleton for contact sources.
     */
    birthdays?: BirthdayInput[];
    /**
     * **DEPRECATED**: No data will be returned The person's bragging rights.
     */
    braggingRights?: BraggingRightsInput[];
    /**
     * The person's calendar URLs.
     */
    calendarUrls?: CalendarUrlInput[];
    /**
     * The person's client data.
     */
    clientData?: ClientDataInput[];
    /**
     * The person's email addresses. For `people.connections.list` and `otherContacts.list` the number of email addresses is limited to 100. If a Person has more email addresses the entire set can be obtained by calling GetPeople.
     */
    emailAddresses?: EmailAddressInput[];
    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
     */
    etag?: string;
    /**
     * The person's events.
     */
    events?: EventInput[];
    /**
     * The person's external IDs.
     */
    externalIds?: ExternalIdInput[];
    /**
     * The person's file-ases.
     */
    fileAses?: FileAsInput[];
    /**
     * The person's genders. This field is a singleton for contact sources.
     */
    genders?: GenderInput[];
    /**
     * The person's instant messaging clients.
     */
    imClients?: ImClientInput[];
    /**
     * The person's interests.
     */
    interests?: InterestInput[];
    /**
     * The person's locale preferences.
     */
    locales?: LocaleInput[];
    /**
     * The person's locations.
     */
    locations?: LocationInput[];
    /**
     * The person's group memberships.
     */
    memberships?: MembershipInput[];
    /**
     * The metadata about a person.
     */
    metadata?: PersonMetadataInput;
    /**
     * The person's miscellaneous keywords.
     */
    miscKeywords?: MiscKeywordInput[];
    /**
     * The person's names. This field is a singleton for contact sources.
     */
    names?: NameInput[];
    /**
     * The person's nicknames.
     */
    nicknames?: NicknameInput[];
    /**
     * The person's occupations.
     */
    occupations?: OccupationInput[];
    /**
     * The person's past or current organizations.
     */
    organizations?: OrganizationInput[];
    /**
     * The person's phone numbers. For `people.connections.list` and `otherContacts.list` the number of phone numbers is limited to 100. If a Person has more phone numbers the entire set can be obtained by calling GetPeople.
     */
    phoneNumbers?: PhoneNumberInput[];
    /**
     * The person's relations.
     */
    relations?: RelationInput[];
    /**
     * **DEPRECATED**: (Please use `person.locations` instead) The person's residences.
     */
    residences?: ResidenceInput[];
    /**
     * The resource name for the person, assigned by the server. An ASCII string in the form of `people/{person_id}`.
     */
    resourceName?: string;
    /**
     * The person's SIP addresses.
     */
    sipAddresses?: SipAddressInput[];
    /**
     * The person's skills.
     */
    skills?: SkillInput[];
    /**
     * The person's associated URLs.
     */
    urls?: UrlInput[];
    /**
     * The person's user defined data.
     */
    userDefined?: UserDefinedInput[];
}
