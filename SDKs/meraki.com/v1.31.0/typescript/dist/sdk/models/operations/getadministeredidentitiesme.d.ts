import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * API key
 */
export declare class GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationApiKey extends SpeakeasyBase {
    /**
     * If API key is created for this user
     */
    created?: boolean;
}
/**
 * API authentication
 */
export declare class GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationApi extends SpeakeasyBase {
    /**
     * API key
     */
    key?: GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationApiKey;
}
/**
 * SAML authentication
 */
export declare class GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationSaml extends SpeakeasyBase {
    /**
     * If SAML authentication is enabled for this user
     */
    enabled?: boolean;
}
/**
 * TwoFactor authentication
 */
export declare class GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationTwoFactor extends SpeakeasyBase {
    /**
     * If twoFactor authentication is enabled for this user
     */
    enabled?: boolean;
}
/**
 * Authentication info
 */
export declare class GetAdministeredIdentitiesMe200ApplicationJSONAuthentication extends SpeakeasyBase {
    /**
     * API authentication
     */
    api?: GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationApi;
    /**
     * Authentication mode
     */
    mode?: string;
    /**
     * SAML authentication
     */
    saml?: GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationSaml;
    /**
     * TwoFactor authentication
     */
    twoFactor?: GetAdministeredIdentitiesMe200ApplicationJSONAuthenticationTwoFactor;
}
/**
 * Successful operation
 */
export declare class GetAdministeredIdentitiesMe200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication info
     */
    authentication?: GetAdministeredIdentitiesMe200ApplicationJSONAuthentication;
    /**
     * User email
     */
    email?: string;
    /**
     * Last seen active on Dashboard UI
     */
    lastUsedDashboardAt?: Date;
    /**
     * Username
     */
    name?: string;
}
export declare class GetAdministeredIdentitiesMeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getAdministeredIdentitiesMe200ApplicationJSONObject?: GetAdministeredIdentitiesMe200ApplicationJSON;
}
