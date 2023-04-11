import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
 */
export declare enum UpdateNetworkVlanRequestBodyDhcpHandlingEnum {
    DoNotRespondToDHCPRequests = "Do not respond to DHCP requests",
    RelayDHCPToAnotherServer = "Relay DHCP to another server",
    RunADHCPServer = "Run a DHCP server"
}
/**
 * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
 */
export declare enum UpdateNetworkVlanRequestBodyDhcpLeaseTimeEnum {
    OneDay = "1 day",
    OneHour = "1 hour",
    OneWeek = "1 week",
    TwelveHours = "12 hours",
    ThirtyMinutes = "30 minutes",
    FourHours = "4 hours"
}
/**
 * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
 */
export declare enum UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnum {
    Hex = "hex",
    Integer = "integer",
    Ip = "ip",
    Text = "text"
}
export declare class UpdateNetworkVlanRequestBodyDhcpOptions extends SpeakeasyBase {
    /**
     * The code for the DHCP option. This should be an integer between 2 and 254.
     */
    code: string;
    /**
     * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
     */
    type: UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnum;
    /**
     * The value for the DHCP option
     */
    value: string;
}
export declare class UpdateNetworkVlanRequestBodyReservedIpRanges extends SpeakeasyBase {
    /**
     * A text comment for the reserved range
     */
    comment: string;
    /**
     * The last IP in the reserved range
     */
    end: string;
    /**
     * The first IP in the reserved range
     */
    start: string;
}
export declare class UpdateNetworkVlanRequestBody extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the VLAN
     */
    applianceIp?: string;
    /**
     * DHCP boot option for boot filename
     */
    dhcpBootFilename?: string;
    /**
     * DHCP boot option to direct boot clients to the server to load the boot file from
     */
    dhcpBootNextServer?: string;
    /**
     * Use DHCP boot options specified in other properties
     */
    dhcpBootOptionsEnabled?: boolean;
    /**
     * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
     */
    dhcpHandling?: UpdateNetworkVlanRequestBodyDhcpHandlingEnum;
    /**
     * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
     */
    dhcpLeaseTime?: UpdateNetworkVlanRequestBodyDhcpLeaseTimeEnum;
    /**
     * The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties.
     */
    dhcpOptions?: UpdateNetworkVlanRequestBodyDhcpOptions[];
    /**
     * The IPs of the DHCP servers that DHCP requests should be relayed to
     */
    dhcpRelayServerIps?: string[];
    /**
     * The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names
     */
    dnsNameservers?: string;
    /**
     * The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.
     */
    fixedIpAssignments?: Record<string, any>;
    /**
     * The id of the desired group policy to apply to the VLAN
     */
    groupPolicyId?: string;
    /**
     * The name of the VLAN
     */
    name?: string;
    /**
     * The DHCP reserved IP ranges on the VLAN
     */
    reservedIpRanges?: UpdateNetworkVlanRequestBodyReservedIpRanges[];
    /**
     * The subnet of the VLAN
     */
    subnet?: string;
    /**
     * The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
     */
    vpnNatSubnet?: string;
}
export declare class UpdateNetworkVlanRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkVlanRequestBody;
    networkId: string;
    vlanId: string;
}
export declare class UpdateNetworkVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkVlan200ApplicationJSONObject?: Record<string, any>;
}
