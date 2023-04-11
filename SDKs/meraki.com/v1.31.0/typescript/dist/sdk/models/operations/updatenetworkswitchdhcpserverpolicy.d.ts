import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Email alert settings for DHCP servers
 */
export declare class UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail extends SpeakeasyBase {
    /**
     * When enabled, send an email if a new DHCP server is seen. Default value is false.
     */
    enabled?: boolean;
}
/**
 * Alert settings for DHCP servers
 */
export declare class UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts extends SpeakeasyBase {
    /**
     * Email alert settings for DHCP servers
     */
    email?: UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail;
}
/**
 * Dynamic ARP Inspection settings
 */
export declare class UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection extends SpeakeasyBase {
    /**
     * Enable or disable Dynamic ARP Inspection on the network. Default value is false.
     */
    enabled?: boolean;
}
/**
 * 'allow' or 'block' new DHCP servers. Default value is 'allow'.
 */
export declare enum UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum {
    Allow = "allow",
    Block = "block"
}
export declare class UpdateNetworkSwitchDhcpServerPolicyRequestBody extends SpeakeasyBase {
    /**
     * Alert settings for DHCP servers
     */
    alerts?: UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts;
    /**
     * List the MAC addresses of DHCP servers to permit on the network when defaultPolicy is set to block. An empty array will clear the entries.
     */
    allowedServers?: string[];
    /**
     * Dynamic ARP Inspection settings
     */
    arpInspection?: UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection;
    /**
     * List the MAC addresses of DHCP servers to block on the network when defaultPolicy is set to allow. An empty array will clear the entries.
     */
    blockedServers?: string[];
    /**
     * 'allow' or 'block' new DHCP servers. Default value is 'allow'.
     */
    defaultPolicy?: UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;
}
export declare class UpdateNetworkSwitchDhcpServerPolicyRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchDhcpServerPolicyRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchDhcpServerPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject?: Record<string, any>;
}
