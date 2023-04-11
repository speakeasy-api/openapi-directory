import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    merakiAuthUserId: string;
    networkId: string;
}
export declare class GetNetworkMerakiAuthUser200ApplicationJSONAuthorizations extends SpeakeasyBase {
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
export declare class GetNetworkMerakiAuthUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authorization type for user.
     */
    accountType?: string;
    /**
     * User authorization info
     */
    authorizations?: GetNetworkMerakiAuthUser200ApplicationJSONAuthorizations[];
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
export declare class GetNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkMerakiAuthUser200ApplicationJSONObject?: GetNetworkMerakiAuthUser200ApplicationJSON;
}
