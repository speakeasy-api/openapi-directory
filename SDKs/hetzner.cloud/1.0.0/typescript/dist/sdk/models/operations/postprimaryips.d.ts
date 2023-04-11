import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Resource type the Primary IP can be assigned to
 */
export declare enum PostPrimaryIpsCreatePrimaryIPRequestAssigneeTypeEnum {
    Server = "server"
}
/**
 * Primary IP type
 */
export declare enum PostPrimaryIpsCreatePrimaryIPRequestTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The `type` argument is required while `datacenter` and `assignee_id` are mutually exclusive.
 */
export declare class PostPrimaryIpsCreatePrimaryIPRequest extends SpeakeasyBase {
    /**
     * ID of the resource the Primary IP should be assigned to. Omitted if it should not be assigned.
     */
    assigneeId?: number;
    /**
     * Resource type the Primary IP can be assigned to
     */
    assigneeType: PostPrimaryIpsCreatePrimaryIPRequestAssigneeTypeEnum;
    /**
     * Delete the Primary IP when the Server it is assigned to is deleted. If omitted defaults to `false`.
     */
    autoDelete?: boolean;
    /**
     * ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if `assignee_id` is passed.
     */
    datacenter?: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    name: string;
    /**
     * Primary IP type
     */
    type: PostPrimaryIpsCreatePrimaryIPRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostPrimaryIpsCreatePrimaryIPResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostPrimaryIpsCreatePrimaryIPResponseActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostPrimaryIpsCreatePrimaryIPResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostPrimaryIpsCreatePrimaryIPResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostPrimaryIpsCreatePrimaryIPResponseActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostPrimaryIpsCreatePrimaryIPResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostPrimaryIpsCreatePrimaryIPResponseActionStatusEnum;
}
/**
 * Resource type the Primary IP can be assigned to
 */
export declare enum PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPAssigneeTypeEnum {
    Server = "server"
}
export declare class PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDatacenterLocation extends SpeakeasyBase {
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
export declare class PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDatacenterServerTypes extends SpeakeasyBase {
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
export declare class PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDatacenterServerTypes;
}
export declare class PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDnsPtr extends SpeakeasyBase {
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
export declare class PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Type of the Primary IP
 */
export declare enum PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class PostPrimaryIpsCreatePrimaryIPResponsePrimaryIP extends SpeakeasyBase {
    /**
     * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
     */
    assigneeId: number;
    /**
     * Resource type the Primary IP can be assigned to
     */
    assigneeType: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPAssigneeTypeEnum;
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
    datacenter: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDatacenter;
    /**
     * Array of reverse DNS entries
     */
    dnsPtr: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPDnsPtr[];
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
    protection: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPProtection;
    /**
     * Type of the Primary IP
     */
    type: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIPTypeEnum;
}
/**
 * The `primary_ip` key contains the Primary IP that was just created
 */
export declare class PostPrimaryIpsCreatePrimaryIPResponse extends SpeakeasyBase {
    action?: PostPrimaryIpsCreatePrimaryIPResponseAction;
    primaryIp: PostPrimaryIpsCreatePrimaryIPResponsePrimaryIP;
}
export declare class PostPrimaryIpsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `primary_ip` key contains the Primary IP that was just created
     */
    createPrimaryIPResponse?: PostPrimaryIpsCreatePrimaryIPResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
