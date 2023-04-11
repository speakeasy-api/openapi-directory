import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLoadBalancerTypesRequest extends SpeakeasyBase {
    /**
     * Can be used to filter Load Balancer types by their name. The response will only contain the Load Balancer type matching the specified name.
     */
    name?: string;
}
/**
 * Hourly costs for a Resource in this Location
 */
export declare class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
 */
export declare class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Resource in this Location
     */
    priceHourly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly;
    /**
     * Monthly costs for a Resource in this Location
     */
    priceMonthly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly;
}
export declare class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes extends SpeakeasyBase {
    /**
     * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
     */
    deprecated: string;
    /**
     * Description of the Load Balancer type
     */
    description: string;
    /**
     * ID of the Load Balancer type
     */
    id: number;
    /**
     * Number of SSL Certificates that can be assigned to a single Load Balancer
     */
    maxAssignedCertificates: number;
    /**
     * Number of maximum simultaneous open connections
     */
    maxConnections: number;
    /**
     * Number of services a Load Balancer of this type can have
     */
    maxServices: number;
    /**
     * Number of targets a single Load Balancer can have
     */
    maxTargets: number;
    /**
     * Unique identifier of the Load Balancer type
     */
    name: string;
    /**
     * Prices in different network zones
     */
    prices: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices[];
}
/**
 * The `load_balancer_types` key in the reply contains an array of Load Balancer type objects with this structure
 */
export declare class GetLoadBalancerTypes200ApplicationJSON extends SpeakeasyBase {
    loadBalancerTypes: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes[];
}
export declare class GetLoadBalancerTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `load_balancer_types` key in the reply contains an array of Load Balancer type objects with this structure
     */
    getLoadBalancerTypes200ApplicationJSONObject?: GetLoadBalancerTypes200ApplicationJSON;
}
