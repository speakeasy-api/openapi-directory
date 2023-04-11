import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
    /**
     * Date for authorization to expire. Default is for authorization to not expire.
     */
    expiresAt?: string;
    /**
     * SSID for which the user is being authorized
     */
    ssidNumber: number;
}
export declare class UpdateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
    /**
     * Authorization zones and expiration dates for the user.
     */
    authorizations?: UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[];
    /**
     * Whether or not Meraki should email the password to user. Default is false.
     */
    emailPasswordToUser?: boolean;
    /**
     * Name of the user. Only allowed If the user is not Dashboard administrator.
     */
    name?: string;
    /**
     * The password for this user account. Only allowed If the user is not Dashboard administrator.
     */
    password?: string;
}
export declare class UpdateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkMerakiAuthUserRequestBody;
    merakiAuthUserId: string;
    networkId: string;
}
export declare class UpdateNetworkMerakiAuthUser200ApplicationJSONAuthorizations extends SpeakeasyBase {
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
export declare class UpdateNetworkMerakiAuthUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authorization type for user.
     */
    accountType?: string;
    /**
     * User authorization info
     */
    authorizations?: UpdateNetworkMerakiAuthUser200ApplicationJSONAuthorizations[];
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
export declare class UpdateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkMerakiAuthUser200ApplicationJSONObject?: UpdateNetworkMerakiAuthUser200ApplicationJSON;
}
