import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmUsersRequest extends SpeakeasyBase {
    /**
     * Filter users by email(s).
     */
    emails?: string[];
    /**
     * Filter users by id(s).
     */
    ids?: string[];
    networkId: string;
    /**
     * Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags.
     */
    scope?: string[];
    /**
     * Filter users by username(s).
     */
    usernames?: string[];
}
export declare class GetNetworkSmUsers200ApplicationJSON extends SpeakeasyBase {
    /**
     * Active Directory Groups the user belongs to.
     */
    adGroups?: string[];
    /**
     * Apple School Manager Groups the user belongs to.
     */
    asmGroups?: string[];
    /**
     * Azure Active Directory Groups the user belongs to.
     */
    azureAdGroups?: string[];
    /**
     * The user display name.
     */
    displayName?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * User full name.
     */
    fullName?: string;
    /**
     * A boolean indicating if the user has an associated identity certificate..
     */
    hasIdentityCertificate?: boolean;
    /**
     * A boolean denoting if the user has a password associated with the record.
     */
    hasPassword?: boolean;
    /**
     * The Meraki managed Id of the user record.
     */
    id?: string;
    /**
     * Whether the user was created using an external integration, or via the Meraki Dashboard.
     */
    isExternal?: boolean;
    /**
     * SAML Groups the user belongs to.
     */
    samlGroups?: string[];
    /**
     * The set of tags the user is scoped to.
     */
    tags?: string;
    /**
     * The url where the users thumbnail is hosted.
     */
    userThumbnail?: string;
    /**
     * The users username.
     */
    username?: string;
}
export declare class GetNetworkSmUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmUsers200ApplicationJSONObjects?: GetNetworkSmUsers200ApplicationJSON[];
}
