import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkCellularGatewayDhcpRequestBody extends SpeakeasyBase {
    /**
     * DHCP Lease time for all MG of the network. Possible values are '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'.
     */
    dhcpLeaseTime?: string;
    /**
     * list of fixed IPs representing the the DNS Name servers when the mode is 'custom'
     */
    dnsCustomNameservers?: string[];
    /**
     * DNS name servers mode for all MG of the network. Possible values are: 'upstream_dns', 'google_dns', 'opendns', 'custom'.
     */
    dnsNameservers?: string;
}
export declare class UpdateNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkCellularGatewayDhcpRequestBody;
    networkId: string;
}
/**
 * DHCP Lease time for all MG in the network.
 */
export declare enum UpdateNetworkCellularGatewayDhcp200ApplicationJSONDhcpLeaseTimeEnum {
    OneDay = "1 day",
    OneHour = "1 hour",
    OneWeek = "1 week",
    TwelveHours = "12 hours",
    ThirtyMinutes = "30 minutes",
    FourHours = "4 hours"
}
/**
 * DNS name servers mode for all MG in the network.
 */
export declare enum UpdateNetworkCellularGatewayDhcp200ApplicationJSONDnsNameserversEnum {
    Custom = "custom",
    GoogleDns = "google_dns",
    Opendns = "opendns",
    UpstreamDns = "upstream_dns"
}
/**
 * Successful operation
 */
export declare class UpdateNetworkCellularGatewayDhcp200ApplicationJSON extends SpeakeasyBase {
    /**
     * DHCP Lease time for all MG in the network.
     */
    dhcpLeaseTime?: UpdateNetworkCellularGatewayDhcp200ApplicationJSONDhcpLeaseTimeEnum;
    /**
     * List of fixed IPs representing the the DNS Name servers when the mode is 'custom'.
     */
    dnsCustomNameservers?: string[];
    /**
     * DNS name servers mode for all MG in the network.
     */
    dnsNameservers?: UpdateNetworkCellularGatewayDhcp200ApplicationJSONDnsNameserversEnum;
}
export declare class UpdateNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkCellularGatewayDhcp200ApplicationJSONObject?: UpdateNetworkCellularGatewayDhcp200ApplicationJSON;
}
