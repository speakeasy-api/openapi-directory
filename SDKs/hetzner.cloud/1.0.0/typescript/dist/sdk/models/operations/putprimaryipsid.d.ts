import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutPrimaryIpsIdUpdatePrimaryIPRequest extends SpeakeasyBase {
    /**
     * Delete this Primary IP when the resource it is assigned to is deleted
     */
    autoDelete?: boolean;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * New unique name to set
     */
    name?: string;
}
export declare class PutPrimaryIpsIdRequest extends SpeakeasyBase {
    requestBody?: PutPrimaryIpsIdUpdatePrimaryIPRequest;
    /**
     * ID of the resource
     */
    id: number;
}
/**
 * Resource type the Primary IP can be assigned to
 */
export declare enum PutPrimaryIpsIdPrimaryIPResponsePrimaryIPAssigneeTypeEnum {
    Server = "server"
}
export declare class PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterLocation extends SpeakeasyBase {
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
export declare class PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterServerTypes extends SpeakeasyBase {
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
export declare class PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenterServerTypes;
}
export declare class PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr extends SpeakeasyBase {
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
export declare class PutPrimaryIpsIdPrimaryIPResponsePrimaryIPProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Type of the Primary IP
 */
export declare enum PutPrimaryIpsIdPrimaryIPResponsePrimaryIPTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class PutPrimaryIpsIdPrimaryIPResponsePrimaryIP extends SpeakeasyBase {
    /**
     * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
     */
    assigneeId: number;
    /**
     * Resource type the Primary IP can be assigned to
     */
    assigneeType: PutPrimaryIpsIdPrimaryIPResponsePrimaryIPAssigneeTypeEnum;
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
    datacenter: PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDatacenter;
    /**
     * Array of reverse DNS entries
     */
    dnsPtr: PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr[];
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
    protection: PutPrimaryIpsIdPrimaryIPResponsePrimaryIPProtection;
    /**
     * Type of the Primary IP
     */
    type: PutPrimaryIpsIdPrimaryIPResponsePrimaryIPTypeEnum;
}
/**
 * The `primary_ip` key contains the Primary IP that was just updated
 */
export declare class PutPrimaryIpsIdPrimaryIPResponse extends SpeakeasyBase {
    primaryIp: PutPrimaryIpsIdPrimaryIPResponsePrimaryIP;
}
export declare class PutPrimaryIpsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `primary_ip` key contains the Primary IP that was just updated
     */
    primaryIPResponse?: PutPrimaryIpsIdPrimaryIPResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
