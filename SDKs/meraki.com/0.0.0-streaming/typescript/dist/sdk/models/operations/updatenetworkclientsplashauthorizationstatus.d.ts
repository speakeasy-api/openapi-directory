import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Splash authorization for SSID 0
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 1
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 10
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 11
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 12
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 13
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 14
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 2
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 3
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 4
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 5
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 6
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 7
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 8
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 9
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9 extends SpeakeasyBase {
    /**
     * New authorization status for the SSID (true, false).
     */
    isAuthorized?: boolean;
}
/**
 * The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs
 */
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids extends SpeakeasyBase {
    /**
     * Splash authorization for SSID 0
     */
    zero?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
    /**
     * Splash authorization for SSID 1
     */
    one?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
    /**
     * Splash authorization for SSID 10
     */
    ten?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
    /**
     * Splash authorization for SSID 11
     */
    eleven?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
    /**
     * Splash authorization for SSID 12
     */
    twelve?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
    /**
     * Splash authorization for SSID 13
     */
    thirteen?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
    /**
     * Splash authorization for SSID 14
     */
    fourteen?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
    /**
     * Splash authorization for SSID 2
     */
    two?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
    /**
     * Splash authorization for SSID 3
     */
    three?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
    /**
     * Splash authorization for SSID 4
     */
    four?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
    /**
     * Splash authorization for SSID 5
     */
    five?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
    /**
     * Splash authorization for SSID 6
     */
    six?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
    /**
     * Splash authorization for SSID 7
     */
    seven?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
    /**
     * Splash authorization for SSID 8
     */
    eight?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
    /**
     * Splash authorization for SSID 9
     */
    nine?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;
}
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBody extends SpeakeasyBase {
    /**
     * The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs
     */
    ssids: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
}
export declare class UpdateNetworkClientSplashAuthorizationStatusRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkClientSplashAuthorizationStatusRequestBody;
    clientId: string;
    networkId: string;
}
export declare class UpdateNetworkClientSplashAuthorizationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject?: Record<string, any>;
}
