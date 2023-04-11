import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The bandwidth settings for the 'cellular' uplink
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular extends SpeakeasyBase {
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
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 extends SpeakeasyBase {
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
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 extends SpeakeasyBase {
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
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits extends SpeakeasyBase {
    /**
     * The bandwidth settings for the 'cellular' uplink
     */
    cellular?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
    /**
     * The bandwidth settings for the 'wan1' uplink
     */
    wan1?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
    /**
     * The bandwidth settings for the 'wan2' uplink
     */
    wan2?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody extends SpeakeasyBase {
    /**
     * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
     */
    bandwidthLimits?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject?: Record<string, any>;
}
