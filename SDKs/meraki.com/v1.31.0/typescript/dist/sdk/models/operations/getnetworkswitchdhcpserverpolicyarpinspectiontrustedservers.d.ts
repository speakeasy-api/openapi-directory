import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * IPv4 attributes of the trusted server.
 */
export declare class GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONIpv4 extends SpeakeasyBase {
    /**
     * IPv4 address of the trusted server.
     */
    address?: string;
}
export declare class GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSON extends SpeakeasyBase {
    /**
     * IPv4 attributes of the trusted server.
     */
    ipv4?: GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONIpv4;
    /**
     * Mac address of the trusted server.
     */
    mac?: string;
    /**
     * ID of the trusted server.
     */
    trustedServerId?: string;
    /**
     * Vlan ID of the trusted server.
     */
    vlan?: number;
}
export declare class GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects?: GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSON[];
}
