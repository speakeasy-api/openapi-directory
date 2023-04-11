import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkAppliancePortRequestBody extends SpeakeasyBase {
    /**
     * The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing.
     */
    accessPolicy?: string;
    /**
     * Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port.
     */
    allowedVlans?: string;
    /**
     * Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true.
     */
    dropUntaggedTraffic?: boolean;
    /**
     * The status of the port
     */
    enabled?: boolean;
    /**
     * The type of the port: 'access' or 'trunk'.
     */
    type?: string;
    /**
     * Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode.
     */
    vlan?: number;
}
export declare class UpdateNetworkAppliancePortRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkAppliancePortRequestBody;
    networkId: string;
    portId: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkAppliancePort200ApplicationJSON extends SpeakeasyBase {
    /**
     * The name of the policy. Only applicable to Access ports.
     */
    accessPolicy?: string;
    /**
     * Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port.
     */
    allowedVlans?: string;
    /**
     * Whether the trunk port can drop all untagged traffic.
     */
    dropUntaggedTraffic?: boolean;
    /**
     * The status of the port
     */
    enabled?: boolean;
    /**
     * Number of the port
     */
    number?: number;
    /**
     * The type of the port: 'access' or 'trunk'.
     */
    type?: string;
    /**
     * Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode.
     */
    vlan?: number;
}
export declare class UpdateNetworkAppliancePortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkAppliancePort200ApplicationJSONObject?: UpdateNetworkAppliancePort200ApplicationJSON;
}
