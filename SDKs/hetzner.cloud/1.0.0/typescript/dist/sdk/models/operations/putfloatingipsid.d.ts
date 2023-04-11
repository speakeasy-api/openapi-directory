import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutFloatingIpsIdUpdateFloatingIPRequest extends SpeakeasyBase {
    /**
     * New Description to set
     */
    description?: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * New unique name to set
     */
    name?: string;
}
export declare class PutFloatingIpsIdRequest extends SpeakeasyBase {
    requestBody?: PutFloatingIpsIdUpdateFloatingIPRequest;
    /**
     * ID of the Floating IP
     */
    id: number;
}
export declare class PutFloatingIpsId200ApplicationJSONFloatingIpDnsPtr extends SpeakeasyBase {
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
export declare class PutFloatingIpsId200ApplicationJSONFloatingIpHomeLocation extends SpeakeasyBase {
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
export declare class PutFloatingIpsId200ApplicationJSONFloatingIpProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Type of the Floating IP
 */
export declare enum PutFloatingIpsId200ApplicationJSONFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class PutFloatingIpsId200ApplicationJSONFloatingIp extends SpeakeasyBase {
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
    dnsPtr: PutFloatingIpsId200ApplicationJSONFloatingIpDnsPtr[];
    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     */
    homeLocation: PutFloatingIpsId200ApplicationJSONFloatingIpHomeLocation;
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
    protection: PutFloatingIpsId200ApplicationJSONFloatingIpProtection;
    /**
     * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
     */
    server: number;
    /**
     * Type of the Floating IP
     */
    type: PutFloatingIpsId200ApplicationJSONFloatingIpTypeEnum;
}
/**
 * The `floating_ip` key in the reply contains the modified Floating IP object with the new description
 */
export declare class PutFloatingIpsId200ApplicationJSON extends SpeakeasyBase {
    floatingIp: PutFloatingIpsId200ApplicationJSONFloatingIp;
}
export declare class PutFloatingIpsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `floating_ip` key in the reply contains the modified Floating IP object with the new description
     */
    putFloatingIpsId200ApplicationJSONObject?: PutFloatingIpsId200ApplicationJSON;
}
