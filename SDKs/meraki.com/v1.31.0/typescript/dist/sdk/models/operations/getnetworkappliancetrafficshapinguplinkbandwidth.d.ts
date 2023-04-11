import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidthRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * uplink cellular configued limits [optional]
 */
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimitsCellular extends SpeakeasyBase {
    /**
     * configured UP limit for the uplink (in Kbps).  Null indicated unlimited
     */
    limitDown?: number;
    /**
     * configured UP limit for the uplink (in Kbps).  Null indicated unlimited
     */
    limitUp?: number;
}
/**
 * uplink wan1 configued limits [optional]
 */
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimitsWan1 extends SpeakeasyBase {
    /**
     * configured UP limit for the uplink (in Kbps).  Null indicated unlimited
     */
    limitDown?: number;
    /**
     * configured UP limit for the uplink (in Kbps).  Null indicated unlimited
     */
    limitUp?: number;
}
/**
 * uplink wan2 configued limits [optional]
 */
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimitsWan2 extends SpeakeasyBase {
    /**
     * configured UP limit for the uplink (in Kbps).  Null indicated unlimited
     */
    limitDown?: number;
    /**
     * configured UP limit for the uplink (in Kbps).  Null indicated unlimited
     */
    limitUp?: number;
}
/**
 * A hash uplink keys and their configured settings for the Appliance
 */
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimits extends SpeakeasyBase {
    /**
     * uplink cellular configued limits [optional]
     */
    cellular?: GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimitsCellular;
    /**
     * uplink wan1 configued limits [optional]
     */
    wan1?: GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimitsWan1;
    /**
     * uplink wan2 configued limits [optional]
     */
    wan2?: GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimitsWan2;
}
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONCapabilitiesBandwidths extends SpeakeasyBase {
    /**
     * name of uplink
     */
    interface?: string;
    /**
     * limit in bytes (null indicates unlimited)
     */
    limit?: number;
}
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONCapabilities extends SpeakeasyBase {
    /**
     * array of uplink limits
     */
    bandwidths?: GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONCapabilitiesBandwidths[];
    /**
     * model number of appliance
     */
    model?: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSON extends SpeakeasyBase {
    /**
     * A hash uplink keys and their configured settings for the Appliance
     */
    bandwidthLimits?: GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONBandwidthLimits;
    /**
     * Array of appliances
     */
    capabilities?: GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONCapabilities[];
}
export declare class GetNetworkApplianceTrafficShapingUplinkBandwidthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject?: GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSON;
}
