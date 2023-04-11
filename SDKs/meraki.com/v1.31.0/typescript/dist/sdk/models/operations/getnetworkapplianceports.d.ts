import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAppliancePortsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkAppliancePorts200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetNetworkAppliancePortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAppliancePorts200ApplicationJSONObjects?: GetNetworkAppliancePorts200ApplicationJSON[];
}
