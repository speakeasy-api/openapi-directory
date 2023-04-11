import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Floating IP type
 */
export declare enum PostFloatingIpsCreateFloatingIPRequestTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The `type` argument is required while `home_location` and `server` are mutually exclusive.
 */
export declare class PostFloatingIpsCreateFloatingIPRequest extends SpeakeasyBase {
    description?: string;
    /**
     * Home Location (routing is optimized for that Location). Only optional if Server argument is passed.
     */
    homeLocation?: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    name?: string;
    /**
     * Server to assign the Floating IP to
     */
    server?: number;
    /**
     * Floating IP type
     */
    type: PostFloatingIpsCreateFloatingIPRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFloatingIps201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFloatingIps201ApplicationJSONActionResources extends SpeakeasyBase {
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
export declare enum PostFloatingIps201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIps201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFloatingIps201ApplicationJSONActionError;
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
    resources: PostFloatingIps201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFloatingIps201ApplicationJSONActionStatusEnum;
}
export declare class PostFloatingIps201ApplicationJSONFloatingIpDnsPtr extends SpeakeasyBase {
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
export declare class PostFloatingIps201ApplicationJSONFloatingIpHomeLocation extends SpeakeasyBase {
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
export declare class PostFloatingIps201ApplicationJSONFloatingIpProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Type of the Floating IP
 */
export declare enum PostFloatingIps201ApplicationJSONFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class PostFloatingIps201ApplicationJSONFloatingIp extends SpeakeasyBase {
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
    dnsPtr: PostFloatingIps201ApplicationJSONFloatingIpDnsPtr[];
    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     */
    homeLocation: PostFloatingIps201ApplicationJSONFloatingIpHomeLocation;
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
    protection: PostFloatingIps201ApplicationJSONFloatingIpProtection;
    /**
     * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
     */
    server: number;
    /**
     * Type of the Floating IP
     */
    type: PostFloatingIps201ApplicationJSONFloatingIpTypeEnum;
}
/**
 * The `floating_ip` key in the reply contains the object that was just created
 */
export declare class PostFloatingIps201ApplicationJSON extends SpeakeasyBase {
    action?: PostFloatingIps201ApplicationJSONAction;
    floatingIp: PostFloatingIps201ApplicationJSONFloatingIp;
}
export declare class PostFloatingIpsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `floating_ip` key in the reply contains the object that was just created
     */
    postFloatingIps201ApplicationJSONObject?: PostFloatingIps201ApplicationJSON;
}
