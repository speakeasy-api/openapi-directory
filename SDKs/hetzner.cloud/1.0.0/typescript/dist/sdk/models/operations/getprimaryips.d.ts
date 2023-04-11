import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc
 */
export declare enum GetPrimaryIpsSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare class GetPrimaryIpsRequest extends SpeakeasyBase {
    /**
     * Can be used to filter resources by their ip. The response will only contain the resources matching the specified ip.
     */
    ip?: string;
    /**
     * Can be used to filter resources by labels. The response will only contain resources matching the label selector.
     */
    labelSelector?: string;
    /**
     * Can be used to filter resources by their name. The response will only contain the resources matching the specified name
     */
    name?: string;
    /**
     * Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc
     */
    sort?: GetPrimaryIpsSortEnum;
}
export declare class GetPrimaryIpsPrimaryIPsResponseMetaPagination extends SpeakeasyBase {
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
export declare class GetPrimaryIpsPrimaryIPsResponseMeta extends SpeakeasyBase {
    pagination: GetPrimaryIpsPrimaryIPsResponseMetaPagination;
}
/**
 * Resource type the Primary IP can be assigned to
 */
export declare enum GetPrimaryIpsPrimaryIPsResponsePrimaryIPAssigneeTypeEnum {
    Server = "server"
}
export declare class GetPrimaryIpsPrimaryIPsResponsePrimaryIPDatacenterLocation extends SpeakeasyBase {
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
 * The Server types the Datacenter can handle
 */
export declare class GetPrimaryIpsPrimaryIPsResponsePrimaryIPDatacenterServerTypes extends SpeakeasyBase {
    /**
     * IDs of Server types that are supported and for which the Datacenter has enough resources left
     */
    available: number[];
    /**
     * IDs of Server types that are supported and for which the Datacenter has enough resources left
     */
    availableForMigration: number[];
    /**
     * IDs of Server types that are supported in the Datacenter
     */
    supported: number[];
}
/**
 * Datacenter this Primary IP is located at
 */
export declare class GetPrimaryIpsPrimaryIPsResponsePrimaryIPDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: GetPrimaryIpsPrimaryIPsResponsePrimaryIPDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: GetPrimaryIpsPrimaryIPsResponsePrimaryIPDatacenterServerTypes;
}
export declare class GetPrimaryIpsPrimaryIPsResponsePrimaryIPDnsPtr extends SpeakeasyBase {
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
 * Protection configuration for the Resource
 */
export declare class GetPrimaryIpsPrimaryIPsResponsePrimaryIPProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Type of the Primary IP
 */
export declare enum GetPrimaryIpsPrimaryIPsResponsePrimaryIPTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetPrimaryIpsPrimaryIPsResponsePrimaryIP extends SpeakeasyBase {
    /**
     * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
     */
    assigneeId: number;
    /**
     * Resource type the Primary IP can be assigned to
     */
    assigneeType: GetPrimaryIpsPrimaryIPsResponsePrimaryIPAssigneeTypeEnum;
    /**
     * Delete this Primary IP when the resource it is assigned to is deleted
     */
    autoDelete: boolean;
    /**
     * Whether the IP is blocked
     */
    blocked: boolean;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Datacenter this Primary IP is located at
     */
    datacenter: GetPrimaryIpsPrimaryIPsResponsePrimaryIPDatacenter;
    /**
     * Array of reverse DNS entries
     */
    dnsPtr: GetPrimaryIpsPrimaryIPsResponsePrimaryIPDnsPtr[];
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
    protection: GetPrimaryIpsPrimaryIPsResponsePrimaryIPProtection;
    /**
     * Type of the Primary IP
     */
    type: GetPrimaryIpsPrimaryIPsResponsePrimaryIPTypeEnum;
}
/**
 * The `primary_ips` key contains an array of Primary IP objects
 */
export declare class GetPrimaryIpsPrimaryIPsResponse extends SpeakeasyBase {
    meta?: GetPrimaryIpsPrimaryIPsResponseMeta;
    primaryIps: GetPrimaryIpsPrimaryIPsResponsePrimaryIP[];
}
export declare class GetPrimaryIpsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `primary_ips` key contains an array of Primary IP objects
     */
    primaryIPsResponse?: GetPrimaryIpsPrimaryIPsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
