import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * DHCP Lease time for all MG in the network.
 */
export declare enum GetNetworkCellularGatewayDhcp200ApplicationJSONDhcpLeaseTimeEnum {
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
export declare enum GetNetworkCellularGatewayDhcp200ApplicationJSONDnsNameserversEnum {
    Custom = "custom",
    GoogleDns = "google_dns",
    Opendns = "opendns",
    UpstreamDns = "upstream_dns"
}
/**
 * Successful operation
 */
export declare class GetNetworkCellularGatewayDhcp200ApplicationJSON extends SpeakeasyBase {
    /**
     * DHCP Lease time for all MG in the network.
     */
    dhcpLeaseTime?: GetNetworkCellularGatewayDhcp200ApplicationJSONDhcpLeaseTimeEnum;
    /**
     * List of fixed IPs representing the the DNS Name servers when the mode is 'custom'.
     */
    dnsCustomNameservers?: string[];
    /**
     * DNS name servers mode for all MG in the network.
     */
    dnsNameservers?: GetNetworkCellularGatewayDhcp200ApplicationJSONDnsNameserversEnum;
}
export declare class GetNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCellularGatewayDhcp200ApplicationJSONObject?: GetNetworkCellularGatewayDhcp200ApplicationJSON;
}
