import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * What kind of authentication was used
 */
export declare enum GetAuthinfo200ApplicationJSONAuthMethodEnum {
    UserSession = "user_session",
    Internal = "internal",
    StaticApiKey = "static_api_key"
}
export declare class GetAuthinfo200ApplicationJSONPermissions extends SpeakeasyBase {
    /**
     * Whether or not this session can mutate resources
     */
    mutate?: boolean;
}
/**
 * A JSON object containing the authentication information
 */
export declare class GetAuthinfo200ApplicationJSON extends SpeakeasyBase {
    /**
     * Reference to the static API key (/api/keys) used to authenticate this request (when auth_method=static_api_key)
     */
    apiKeyId?: string;
    /**
     * What kind of authentication was used
     */
    authMethod?: GetAuthinfo200ApplicationJSONAuthMethodEnum;
    /**
     * Whether or not you are authenticated
     */
    authenticated?: boolean;
    permissions?: GetAuthinfo200ApplicationJSONPermissions;
    /**
     * Url to the individual resource.
     */
    url?: string;
    /**
     * Reference to the user account (/api/users) used to authenticate this request (when auth_method=user_session)
     */
    userId?: string;
}
export declare class GetAuthinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A JSON object containing the authentication information
     */
    getAuthinfo200ApplicationJSONObject?: GetAuthinfo200ApplicationJSON;
}
