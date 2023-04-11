import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
 */
export declare class PersonAgeRange extends SpeakeasyBase {
    /**
     * The age range's upper bound, if any. Possible values include, but are not limited to, the following:
     *
     * @remarks
     * - "17" - for age 17
     * - "20" - for age 20
     */
    max?: number;
    /**
     * The age range's lower bound, if any. Possible values include, but are not limited to, the following:
     *
     * @remarks
     * - "21" - for age 21
     * - "18" - for age 18
     */
    min?: number;
}
/**
 * Extra information about the cover photo.
 */
export declare class PersonCoverCoverInfo extends SpeakeasyBase {
    /**
     * The difference between the left position of the cover image and the actual displayed cover image. Only valid for banner layout.
     */
    leftImageOffset?: number;
    /**
     * The difference between the top position of the cover image and the actual displayed cover image. Only valid for banner layout.
     */
    topImageOffset?: number;
}
/**
 * The person's primary cover image.
 */
export declare class PersonCoverCoverPhoto extends SpeakeasyBase {
    /**
     * The height of the image.
     */
    height?: number;
    /**
     * The URL of the image.
     */
    url?: string;
    /**
     * The width of the image.
     */
    width?: number;
}
/**
 * The cover photo content.
 */
export declare class PersonCover extends SpeakeasyBase {
    /**
     * Extra information about the cover photo.
     */
    coverInfo?: PersonCoverCoverInfo;
    /**
     * The person's primary cover image.
     */
    coverPhoto?: PersonCoverCoverPhoto;
    /**
     * The layout of the cover art. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "banner" - One large image banner.
     */
    layout?: string;
}
export declare class PersonEmails extends SpeakeasyBase {
    /**
     * The type of address. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "account" - Google account email address.
     * - "home" - Home email address.
     * - "work" - Work email address.
     * - "other" - Other.
     */
    type?: string;
    /**
     * The email address.
     */
    value?: string;
}
/**
 * The representation of the person's profile photo.
 */
export declare class PersonImage extends SpeakeasyBase {
    /**
     * Whether the person's profile photo is the default one
     */
    isDefault?: boolean;
    /**
     * The URL of the person's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
     */
    url?: string;
}
/**
 * An object representation of the individual components of a person's name.
 */
export declare class PersonName extends SpeakeasyBase {
    /**
     * The family name (last name) of this person.
     */
    familyName?: string;
    /**
     * The full name of this person, including middle names, suffixes, etc.
     */
    formatted?: string;
    /**
     * The given name (first name) of this person.
     */
    givenName?: string;
    /**
     * The honorific prefixes (such as "Dr." or "Mrs.") for this person.
     */
    honorificPrefix?: string;
    /**
     * The honorific suffixes (such as "Jr.") for this person.
     */
    honorificSuffix?: string;
    /**
     * The middle name of this person.
     */
    middleName?: string;
}
export declare class PersonOrganizations extends SpeakeasyBase {
    /**
     * The department within the organization. Deprecated.
     */
    department?: string;
    /**
     * A short description of the person's role in this organization. Deprecated.
     */
    description?: string;
    /**
     * The date that the person left this organization.
     */
    endDate?: string;
    /**
     * The location of this organization. Deprecated.
     */
    location?: string;
    /**
     * The name of the organization.
     */
    name?: string;
    /**
     * If "true", indicates this organization is the person's primary one, which is typically interpreted as the current one.
     */
    primary?: boolean;
    /**
     * The date that the person joined this organization.
     */
    startDate?: string;
    /**
     * The person's job title or role within the organization.
     */
    title?: string;
    /**
     * The type of organization. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "work" - Work.
     * - "school" - School.
     */
    type?: string;
}
export declare class PersonPlacesLived extends SpeakeasyBase {
    /**
     * If "true", this place of residence is this person's primary residence.
     */
    primary?: boolean;
    /**
     * A place where this person has lived. For example: "Seattle, WA", "Near Toronto".
     */
    value?: string;
}
export declare class PersonUrls extends SpeakeasyBase {
    /**
     * The label of the URL.
     */
    label?: string;
    /**
     * The type of URL. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "otherProfile" - URL for another profile.
     * - "contributor" - URL to a site for which this person is a contributor.
     * - "website" - URL for this Google+ Page's primary website.
     * - "other" - Other URL.
     */
    type?: string;
    /**
     * The URL value.
     */
    value?: string;
}
/**
 * Successful response
 */
export declare class Person extends SpeakeasyBase {
    /**
     * A short biography for this person.
     */
    aboutMe?: string;
    /**
     * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
     */
    ageRange?: PersonAgeRange;
    /**
     * The person's date of birth, represented as YYYY-MM-DD.
     */
    birthday?: string;
    /**
     * The "bragging rights" line of this person.
     */
    braggingRights?: string;
    /**
     * For followers who are visible, the number of people who have added this person or page to a circle.
     */
    circledByCount?: number;
    /**
     * The cover photo content.
     */
    cover?: PersonCover;
    /**
     * (this field is not currently used)
     */
    currentLocation?: string;
    /**
     * The name of this person, which is suitable for display.
     */
    displayName?: string;
    /**
     * The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.
     */
    domain?: string;
    /**
     * A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.
     */
    emails?: PersonEmails[];
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The person's gender. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "male" - Male gender.
     * - "female" - Female gender.
     * - "other" - Other.
     */
    gender?: string;
    /**
     * The ID of this person.
     */
    id?: string;
    /**
     * The representation of the person's profile photo.
     */
    image?: PersonImage;
    /**
     * Whether this user has signed up for Google+.
     */
    isPlusUser?: boolean;
    /**
     * Identifies this resource as a person. Value: "plus#person".
     */
    kind?: string;
    /**
     * The user's preferred language for rendering.
     */
    language?: string;
    /**
     * An object representation of the individual components of a person's name.
     */
    name?: PersonName;
    /**
     * The nickname of this person.
     */
    nickname?: string;
    /**
     * Type of person within Google+. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "person" - represents an actual person.
     * - "page" - represents a page.
     */
    objectType?: string;
    /**
     * The occupation of this person.
     */
    occupation?: string;
    /**
     * A list of current or past organizations with which this person is associated.
     */
    organizations?: PersonOrganizations[];
    /**
     * A list of places where this person has lived.
     */
    placesLived?: PersonPlacesLived[];
    /**
     * If a Google+ Page, the number of people who have +1'd this page.
     */
    plusOneCount?: number;
    /**
     * The person's relationship status. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "single" - Person is single.
     * - "in_a_relationship" - Person is in a relationship.
     * - "engaged" - Person is engaged.
     * - "married" - Person is married.
     * - "its_complicated" - The relationship is complicated.
     * - "open_relationship" - Person is in an open relationship.
     * - "widowed" - Person is widowed.
     * - "in_domestic_partnership" - Person is in a domestic partnership.
     * - "in_civil_union" - Person is in a civil union.
     */
    relationshipStatus?: string;
    /**
     * The person's skills.
     */
    skills?: string;
    /**
     * The brief description (tagline) of this person.
     */
    tagline?: string;
    /**
     * The URL of this person's profile.
     */
    url?: string;
    /**
     * A list of URLs for this person.
     */
    urls?: PersonUrls[];
    /**
     * Whether the person or Google+ Page has been verified.
     */
    verified?: boolean;
}
