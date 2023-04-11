import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Client tracking method of a network
 */
export declare enum GetNetworkApplianceSettings200ApplicationJSONClientTrackingMethodEnum {
    IPAddress = "IP address",
    MACAddress = "MAC address",
    UniqueClientIdentifier = "Unique client identifier"
}
/**
 * Deployment mode of a network
 */
export declare enum GetNetworkApplianceSettings200ApplicationJSONDeploymentModeEnum {
    Passthrough = "passthrough",
    Routed = "routed"
}
/**
 * Dynamic DNS settings for a network
 */
export declare class GetNetworkApplianceSettings200ApplicationJSONDynamicDns extends SpeakeasyBase {
    /**
     * Dynamic DNS enabled
     */
    enabled?: boolean;
    /**
     * Dynamic DNS url prefix. DDNS must be enabled to update
     */
    prefix?: string;
    /**
     * Dynamic DNS url. DDNS must be enabled to update
     */
    url?: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkApplianceSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Client tracking method of a network
     */
    clientTrackingMethod?: GetNetworkApplianceSettings200ApplicationJSONClientTrackingMethodEnum;
    /**
     * Deployment mode of a network
     */
    deploymentMode?: GetNetworkApplianceSettings200ApplicationJSONDeploymentModeEnum;
    /**
     * Dynamic DNS settings for a network
     */
    dynamicDns?: GetNetworkApplianceSettings200ApplicationJSONDynamicDns;
}
export declare class GetNetworkApplianceSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceSettings200ApplicationJSONObject?: GetNetworkApplianceSettings200ApplicationJSON;
}
