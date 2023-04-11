import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Authorization type for user. Can be 'Guest' or '802.1X' for wireless networks, or 'Client VPN' for wired networks. Defaults to '802.1X'.
 */
export declare enum CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum {
    EightHundredAndTwo1X = "802.1X",
    ClientVPN = "Client VPN",
    Guest = "Guest"
}
export declare class CreateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
    /**
     * Date for authorization to expire. Set to 'Never' for the authorization to not expire, which is the default.
     */
    expiresAt?: string;
    /**
     * Required for wireless networks. The SSID for which the user is being authorized, which must be configured for the user's given accountType.
     */
    ssidNumber?: number;
}
export declare class CreateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
    /**
     * Authorization type for user. Can be 'Guest' or '802.1X' for wireless networks, or 'Client VPN' for wired networks. Defaults to '802.1X'.
     */
    accountType?: CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
    /**
     * Authorization zones and expiration dates for the user.
     */
    authorizations: CreateNetworkMerakiAuthUserRequestBodyAuthorizations[];
    /**
     * Email address of the user
     */
    email: string;
    /**
     * Whether or not Meraki should email the password to user. Default is false.
     */
    emailPasswordToUser?: boolean;
    /**
     * Whether or not the user is a Dashboard administrator.
     */
    isAdmin?: boolean;
    /**
     * Name of the user. Only required If the user is not a Dashboard administrator.
     */
    name?: string;
    /**
     * The password for this user account. Only required If the user is not a Dashboard administrator.
     */
    password?: string;
}
export declare class CreateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    requestBody: CreateNetworkMerakiAuthUserRequestBody;
    networkId: string;
}
export declare class CreateNetworkMerakiAuthUser201ApplicationJSONAuthorizations extends SpeakeasyBase {
    /**
     * User is authorized by the account email address
     */
    authorizedByEmail?: string;
    /**
     * User is authorized by the account name
     */
    authorizedByName?: string;
    /**
     * Authorized zone of the user
     */
    authorizedZone?: string;
    /**
     * Authorization expiration time
     */
    expiresAt?: Date;
    /**
     * SSID number
     */
    ssidNumber?: number;
}
/**
 * Successful operation
 */
export declare class CreateNetworkMerakiAuthUser201ApplicationJSON extends SpeakeasyBase {
    /**
     * Authorization type for user.
     */
    accountType?: string;
    /**
     * User authorization info
     */
    authorizations?: CreateNetworkMerakiAuthUser201ApplicationJSONAuthorizations[];
    /**
     * Creation time of the user
     */
    createdAt?: Date;
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * Meraki auth user id
     */
    id?: string;
    /**
     * Whether or not the user is a Dashboard administrator
     */
    isAdmin?: boolean;
    /**
     * Name of the user
     */
    name?: string;
}
export declare class CreateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkMerakiAuthUser201ApplicationJSONObject?: CreateNetworkMerakiAuthUser201ApplicationJSON;
}
