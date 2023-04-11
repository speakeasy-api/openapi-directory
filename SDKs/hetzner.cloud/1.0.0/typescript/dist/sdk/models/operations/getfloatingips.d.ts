import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc
 */
export declare enum GetFloatingIpsSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare class GetFloatingIpsRequest extends SpeakeasyBase {
    /**
     * Can be used to filter Floating IPs by labels. The response will only contain Floating IPs matching the label selector.
     */
    labelSelector?: string;
    /**
     * Can be used to filter Floating IPs by their name. The response will only contain the Floating IP matching the specified name.
     */
    name?: string;
    /**
     * Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc
     */
    sort?: GetFloatingIpsSortEnum;
}
export declare class GetFloatingIps200ApplicationJSONFloatingIpsDnsPtr extends SpeakeasyBase {
    /**
     * DNS pointer for the specific IP address
     */
    dnsPtr: string;
    /**
     * Single IPv4 or IPv6 address
     */
    ip: string;
}
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
 */
export declare class GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation extends SpeakeasyBase {
    /**
     * City the Location is closest to
     */
    city: string;
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    country: string;
    /**
     * Description of the Location
     */
    description: string;
    /**
     * ID of the Location
     */
    id: number;
    /**
     * Latitude of the city closest to the Location
     */
    latitude: number;
    /**
     * Longitude of the city closest to the Location
     */
    longitude: number;
    /**
     * Unique identifier of the Location
     */
    name: string;
    /**
     * Name of network zone this Location resides in
     */
    networkZone: string;
}
/**
 * Protection configuration for the Resource
 */
export declare class GetFloatingIps200ApplicationJSONFloatingIpsProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Type of the Floating IP
 */
export declare enum GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetFloatingIps200ApplicationJSONFloatingIps extends SpeakeasyBase {
    /**
     * Whether the IP is blocked
     */
    blocked: boolean;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Description of the Resource
     */
    description: string;
    /**
     * Array of reverse DNS entries
     */
    dnsPtr: GetFloatingIps200ApplicationJSONFloatingIpsDnsPtr[];
    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     */
    homeLocation: GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * IP address
     */
    ip: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Protection configuration for the Resource
     */
    protection: GetFloatingIps200ApplicationJSONFloatingIpsProtection;
    /**
     * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
     */
    server: number;
    /**
     * Type of the Floating IP
     */
    type: GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum;
}
export declare class GetFloatingIps200ApplicationJSONMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class GetFloatingIps200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetFloatingIps200ApplicationJSONMetaPagination;
}
/**
 * The `floating_ips` key in the reply contains an array of Floating IP objects with this structure
 */
export declare class GetFloatingIps200ApplicationJSON extends SpeakeasyBase {
    floatingIps: GetFloatingIps200ApplicationJSONFloatingIps[];
    meta?: GetFloatingIps200ApplicationJSONMeta;
}
export declare class GetFloatingIpsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `floating_ips` key in the reply contains an array of Floating IP objects with this structure
     */
    getFloatingIps200ApplicationJSONObject?: GetFloatingIps200ApplicationJSON;
}
