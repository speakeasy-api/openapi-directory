import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The updated IPv4 attributes of the trusted server
 */
export declare class UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4 extends SpeakeasyBase {
    /**
     * The updated IPv4 address of the trusted server
     */
    address?: string;
}
export declare class UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody extends SpeakeasyBase {
    /**
     * The updated IPv4 attributes of the trusted server
     */
    ipv4?: UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;
    /**
     * The updated mac address of the trusted server
     */
    mac?: string;
    /**
     * The updated VLAN of the trusted server. It must be between 1 and 4094
     */
    vlan?: number;
}
export declare class UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
    networkId: string;
    trustedServerId: string;
}
/**
 * IPv4 attributes of the trusted server.
 */
export declare class UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONIpv4 extends SpeakeasyBase {
    /**
     * IPv4 address of the trusted server.
     */
    address?: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSON extends SpeakeasyBase {
    /**
     * IPv4 attributes of the trusted server.
     */
    ipv4?: UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONIpv4;
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
export declare class UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject?: UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSON;
}
