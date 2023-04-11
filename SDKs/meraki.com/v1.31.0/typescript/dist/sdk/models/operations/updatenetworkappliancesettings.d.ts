import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Client tracking method of a network
 */
export declare enum UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum {
    IPAddress = "IP address",
    MACAddress = "MAC address",
    UniqueClientIdentifier = "Unique client identifier"
}
/**
 * Deployment mode of a network
 */
export declare enum UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum {
    Passthrough = "passthrough",
    Routed = "routed"
}
/**
 * Dynamic DNS settings for a network
 */
export declare class UpdateNetworkApplianceSettingsRequestBodyDynamicDns extends SpeakeasyBase {
    /**
     * Dynamic DNS enabled
     */
    enabled?: boolean;
    /**
     * Dynamic DNS url prefix. DDNS must be enabled to update
     */
    prefix?: string;
}
export declare class UpdateNetworkApplianceSettingsRequestBody extends SpeakeasyBase {
    /**
     * Client tracking method of a network
     */
    clientTrackingMethod?: UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum;
    /**
     * Deployment mode of a network
     */
    deploymentMode?: UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum;
    /**
     * Dynamic DNS settings for a network
     */
    dynamicDns?: UpdateNetworkApplianceSettingsRequestBodyDynamicDns;
}
export declare class UpdateNetworkApplianceSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceSettingsRequestBody;
    networkId: string;
}
/**
 * Client tracking method of a network
 */
export declare enum UpdateNetworkApplianceSettings200ApplicationJSONClientTrackingMethodEnum {
    IPAddress = "IP address",
    MACAddress = "MAC address",
    UniqueClientIdentifier = "Unique client identifier"
}
/**
 * Deployment mode of a network
 */
export declare enum UpdateNetworkApplianceSettings200ApplicationJSONDeploymentModeEnum {
    Passthrough = "passthrough",
    Routed = "routed"
}
/**
 * Dynamic DNS settings for a network
 */
export declare class UpdateNetworkApplianceSettings200ApplicationJSONDynamicDns extends SpeakeasyBase {
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
export declare class UpdateNetworkApplianceSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Client tracking method of a network
     */
    clientTrackingMethod?: UpdateNetworkApplianceSettings200ApplicationJSONClientTrackingMethodEnum;
    /**
     * Deployment mode of a network
     */
    deploymentMode?: UpdateNetworkApplianceSettings200ApplicationJSONDeploymentModeEnum;
    /**
     * Dynamic DNS settings for a network
     */
    dynamicDns?: UpdateNetworkApplianceSettings200ApplicationJSONDynamicDns;
}
export declare class UpdateNetworkApplianceSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceSettings200ApplicationJSONObject?: UpdateNetworkApplianceSettings200ApplicationJSON;
}
