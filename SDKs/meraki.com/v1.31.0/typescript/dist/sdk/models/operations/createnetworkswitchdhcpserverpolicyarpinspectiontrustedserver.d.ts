import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The IPv4 attributes of the trusted server being added
 */
export declare class CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4 extends SpeakeasyBase {
    /**
     * The IPv4 address of the trusted server being added
     */
    address?: string;
}
export declare class CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody extends SpeakeasyBase {
    /**
     * The IPv4 attributes of the trusted server being added
     */
    ipv4: CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;
    /**
     * The mac address of the trusted server being added
     */
    mac: string;
    /**
     * The VLAN of the trusted server being added. It must be between 1 and 4094
     */
    vlan: number;
}
export declare class CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
    networkId: string;
}
/**
 * IPv4 attributes of the trusted server.
 */
export declare class CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONIpv4 extends SpeakeasyBase {
    /**
     * IPv4 address of the trusted server.
     */
    address?: string;
}
/**
 * Successful operation
 */
export declare class CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSON extends SpeakeasyBase {
    /**
     * IPv4 attributes of the trusted server.
     */
    ipv4?: CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONIpv4;
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
export declare class CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject?: CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSON;
}
