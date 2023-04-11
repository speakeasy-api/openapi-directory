import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPrimaryIpsIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
/**
 * Resource type the Primary IP can be assigned to
 */
export declare enum GetPrimaryIpsIdPrimaryIPResponsePrimaryIPAssigneeTypeEnum {
    Server = "server"
}
export declare class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterLocation extends SpeakeasyBase {
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
export declare class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterServerTypes extends SpeakeasyBase {
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
export declare class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterServerTypes;
}
export declare class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr extends SpeakeasyBase {
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
export declare class GetPrimaryIpsIdPrimaryIPResponsePrimaryIPProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Type of the Primary IP
 */
export declare enum GetPrimaryIpsIdPrimaryIPResponsePrimaryIPTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetPrimaryIpsIdPrimaryIPResponsePrimaryIP extends SpeakeasyBase {
    /**
     * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
     */
    assigneeId: number;
    /**
     * Resource type the Primary IP can be assigned to
     */
    assigneeType: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPAssigneeTypeEnum;
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
    datacenter: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenter;
    /**
     * Array of reverse DNS entries
     */
    dnsPtr: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr[];
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
    protection: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPProtection;
    /**
     * Type of the Primary IP
     */
    type: GetPrimaryIpsIdPrimaryIPResponsePrimaryIPTypeEnum;
}
/**
 * The `primary_ip` key contains a Primary IP object
 */
export declare class GetPrimaryIpsIdPrimaryIPResponse extends SpeakeasyBase {
    primaryIp: GetPrimaryIpsIdPrimaryIPResponsePrimaryIP;
}
export declare class GetPrimaryIpsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `primary_ip` key contains a Primary IP object
     */
    primaryIPResponse?: GetPrimaryIpsIdPrimaryIPResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
