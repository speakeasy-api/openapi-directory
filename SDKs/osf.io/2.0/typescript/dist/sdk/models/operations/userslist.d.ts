import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the user entity.
 */
export declare class UsersListUserAttributes extends SpeakeasyBase {
    /**
     * Whether or not the user is an active user.
     */
    active: boolean;
    /**
     * The time at which the user registered their account, as an iso8601 formatted timestamp.
     */
    dateRegistered: Date;
    /**
     * The family name of the user, used for bibliographic citations.
     */
    familyName?: string;
    /**
     * The full name of the user, used for display on the OSF.
     */
    fullName: string;
    /**
     * The given name of the user, used for bibliographic citations.
     */
    givenName?: string;
    /**
     * The user's locale, e.g. 'en_US'.
     */
    locale?: string;
    /**
     * The middle names of the user, used for bibliographic citations.
     */
    middleNames?: string;
    /**
     * The suffix of the user, used for bibliographic citations.
     */
    suffix?: string;
    /**
     * The user's timezone, e.g. 'Etc/UTC'.
     */
    timezone?: string;
}
/**
 * URLs to alternative representations of the user entity.
 */
export declare class UsersListUserLinks extends SpeakeasyBase {
    /**
     * A link to the user's profile page on the OSF.
     */
    html?: string;
    /**
     * A link to the user's profile image.
     */
    profileImage?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the user entity.
 */
export declare class UsersListUserRelationships extends SpeakeasyBase {
    /**
     * A link to the list of institutions the user is affiliated with.
     */
    institutions?: string;
    /**
     * A link to the list of nodes the user is a contributor to.
     */
    nodes?: string;
}
export declare class UsersListUser extends SpeakeasyBase {
    /**
     * The properties of the user entity.
     */
    attributes: UsersListUserAttributes;
    /**
     * The unique identifier of the user entity.
     */
    id: string;
    /**
     * URLs to alternative representations of the user entity.
     */
    links: UsersListUserLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the user entity.
     */
    relationships: UsersListUserRelationships;
    /**
     * The type identifier of the user entity (`users`).
     */
    type: string;
}
export declare class UsersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
