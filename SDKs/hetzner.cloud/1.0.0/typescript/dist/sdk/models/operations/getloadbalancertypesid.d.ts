import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLoadBalancerTypesIdRequest extends SpeakeasyBase {
    /**
     * ID of Load Balancer type
     */
    id: number;
}
/**
 * Hourly costs for a Resource in this Location
 */
export declare class GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
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
export declare class GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Resource in this Location
     */
    priceHourly: GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceHourly;
    /**
     * Monthly costs for a Resource in this Location
     */
    priceMonthly: GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceMonthly;
}
export declare class GetLoadBalancerTypesId200ApplicationJSONLoadBalancerType extends SpeakeasyBase {
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
    prices: GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePrices[];
}
/**
 * The `load_balancer_type` key in the reply contains a Load Balancer type object with this structure
 */
export declare class GetLoadBalancerTypesId200ApplicationJSON extends SpeakeasyBase {
    loadBalancerType?: GetLoadBalancerTypesId200ApplicationJSONLoadBalancerType;
}
export declare class GetLoadBalancerTypesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `load_balancer_type` key in the reply contains a Load Balancer type object with this structure
     */
    getLoadBalancerTypesId200ApplicationJSONObject?: GetLoadBalancerTypesId200ApplicationJSON;
}
