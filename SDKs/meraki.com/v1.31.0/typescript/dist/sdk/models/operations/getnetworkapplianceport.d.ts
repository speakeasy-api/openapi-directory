import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAppliancePortRequest extends SpeakeasyBase {
    networkId: string;
    portId: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkAppliancePort200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetNetworkAppliancePortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAppliancePort200ApplicationJSONObject?: GetNetworkAppliancePort200ApplicationJSON;
}
