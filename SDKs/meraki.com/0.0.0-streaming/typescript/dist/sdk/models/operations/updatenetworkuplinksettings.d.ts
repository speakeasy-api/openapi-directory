import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The bandwidth settings for the 'cellular' uplink
 */
export declare class UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsCellular extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps). null indicates no limit
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps). null indicates no limit
     */
    limitUp?: number;
}
/**
 * The bandwidth settings for the 'wan1' uplink
 */
export declare class UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan1 extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps). null indicates no limit
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps). null indicates no limit
     */
    limitUp?: number;
}
/**
 * The bandwidth settings for the 'wan2' uplink
 */
export declare class UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan2 extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps). null indicates no limit
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps). null indicates no limit
     */
    limitUp?: number;
}
/**
 * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
 */
export declare class UpdateNetworkUplinkSettingsRequestBodyBandwidthLimits extends SpeakeasyBase {
    /**
     * The bandwidth settings for the 'cellular' uplink
     */
    cellular?: UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsCellular;
    /**
     * The bandwidth settings for the 'wan1' uplink
     */
    wan1?: UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan1;
    /**
     * The bandwidth settings for the 'wan2' uplink
     */
    wan2?: UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan2;
}
export declare class UpdateNetworkUplinkSettingsRequestBody extends SpeakeasyBase {
    /**
     * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
     */
    bandwidthLimits?: UpdateNetworkUplinkSettingsRequestBodyBandwidthLimits;
}
export declare class UpdateNetworkUplinkSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkUplinkSettingsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkUplinkSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkUplinkSettings200ApplicationJSONObject?: Record<string, any>;
}
