import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The user's preferred postal address.
 */
export declare class PostUserRequestBodyAddress extends SpeakeasyBase {
    /**
     * Country name component.
     */
    country?: string;
    /**
     * Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.
     */
    formatted?: string;
    /**
     * City or locality component.
     */
    locality?: string;
    /**
     * Zip code or postal code component.
     */
    postalCode?: string;
    /**
     * State, province, prefecture, or region component.
     */
    region?: string;
    /**
     * Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.
     */
    streetAddress?: string;
}
export declare class PostUserRequestBody extends SpeakeasyBase {
    /**
     * The URL of the user's JSON representation.
     */
    atId?: string;
    /**
     * The user's preferred postal address.
     */
    address?: PostUserRequestBodyAddress;
    /**
     * The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.
     */
    birthdate?: string;
    /**
     * The user's preferred email address.
     */
    email?: string;
    /**
     * True if the user's e-mail address has been verified; otherwise false.
     */
    emailVerified?: boolean;
    /**
     * The user's surname(s) or last name(s).
     */
    familyName?: string;
    /**
     * The enduser's gender. Possible values are: female, male, and unknown.
     */
    gender?: string;
    /**
     * The user's given name(s) or first name(s).
     */
    givenName?: string;
    /**
     * The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash.
     */
    locale?: string;
    /**
     * The simplified URL of the user's profile page.
     */
    me?: string;
    /**
     * The user's middle name(s).
     */
    middleName?: string;
    /**
     * The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences.
     */
    name?: string;
    /**
     * A casual name of the User that may or may not be the same as the given_name.
     */
    nickname?: string;
    /**
     * The user's generated password.
     */
    password?: string;
    /**
     * The user's preferred telephone number.
     */
    phoneNumber?: string;
    /**
     * True if the enduser's phone number has been verified; otherwise false.
     */
    phoneNumberVerified?: boolean;
    /**
     * The URL of the user's profile picture.
     */
    picture?: string;
    /**
     * A shorthand name by which the user wishes to be referred to at the Relying Party.
     */
    preferredUsername?: string;
    /**
     * The URL of the user's profile page.
     */
    profile?: string;
    /**
     * Subject - User identifier at the issuer.
     */
    sub: string;
    /**
     * The user's simplified, shortened identifier at the Issuer.
     */
    uid?: string;
    /**
     * The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.
     */
    updatedAt?: number;
    /**
     * The URL of user's mailbox in a webmail application.
     */
    webmail?: string;
    /**
     * The URL of the user's webpage or blog.
     */
    website?: string;
    /**
     * A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles.
     */
    zoneinfo?: string;
}
export declare class PostUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
