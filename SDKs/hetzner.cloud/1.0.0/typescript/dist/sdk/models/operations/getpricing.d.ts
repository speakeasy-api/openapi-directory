import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPricing200ApplicationJSONPricingFloatingIpPriceMonthly extends SpeakeasyBase {
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
 * The cost of one Floating IP per month
 */
export declare class GetPricing200ApplicationJSONPricingFloatingIp extends SpeakeasyBase {
    priceMonthly: GetPricing200ApplicationJSONPricingFloatingIpPriceMonthly;
}
/**
 * Monthly costs for a Floating IP type in this Location
 */
export declare class GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetPricing200ApplicationJSONPricingFloatingIpsPrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Monthly costs for a Floating IP type in this Location
     */
    priceMonthly: GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly;
}
/**
 * The type of the Floating IP
 */
export declare enum GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetPricing200ApplicationJSONPricingFloatingIps extends SpeakeasyBase {
    /**
     * Floating IP type costs per Location
     */
    prices: GetPricing200ApplicationJSONPricingFloatingIpsPrices[];
    /**
     * The type of the Floating IP
     */
    type: GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum;
}
export declare class GetPricing200ApplicationJSONPricingImagePricePerGbMonth extends SpeakeasyBase {
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
 * The cost of Image per GB/month
 */
export declare class GetPricing200ApplicationJSONPricingImage extends SpeakeasyBase {
    pricePerGbMonth: GetPricing200ApplicationJSONPricingImagePricePerGbMonth;
}
/**
 * Hourly costs for a Load Balancer type in this network zone
 */
export declare class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
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
 * Monthly costs for a Load Balancer type in this network zone
 */
export declare class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Load Balancer type in this network zone
     */
    priceHourly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly;
    /**
     * Monthly costs for a Load Balancer type in this network zone
     */
    priceMonthly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly;
}
export declare class GetPricing200ApplicationJSONPricingLoadBalancerTypes extends SpeakeasyBase {
    /**
     * ID of the Load Balancer type the price is for
     */
    id: number;
    /**
     * Name of the Load Balancer type the price is for
     */
    name: string;
    /**
     * Load Balancer type costs per Location
     */
    prices: GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices[];
}
/**
 * Hourly costs for a Primary IP type in this Location
 */
export declare class GetPricing200ApplicationJSONPricingPrimaryIpsPricesPriceHourly extends SpeakeasyBase {
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
 * Monthly costs for a Primary IP type in this Location
 */
export declare class GetPricing200ApplicationJSONPricingPrimaryIpsPricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetPricing200ApplicationJSONPricingPrimaryIpsPrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Primary IP type in this Location
     */
    priceHourly: GetPricing200ApplicationJSONPricingPrimaryIpsPricesPriceHourly;
    /**
     * Monthly costs for a Primary IP type in this Location
     */
    priceMonthly: GetPricing200ApplicationJSONPricingPrimaryIpsPricesPriceMonthly;
}
/**
 * The type of the Primary IP
 */
export declare enum GetPricing200ApplicationJSONPricingPrimaryIpsTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetPricing200ApplicationJSONPricingPrimaryIps extends SpeakeasyBase {
    /**
     * Primary IP type costs per Location
     */
    prices: GetPricing200ApplicationJSONPricingPrimaryIpsPrices[];
    /**
     * The type of the Primary IP
     */
    type: GetPricing200ApplicationJSONPricingPrimaryIpsTypeEnum;
}
/**
 * Will increase base Server costs by specific percentage
 */
export declare class GetPricing200ApplicationJSONPricingServerBackup extends SpeakeasyBase {
    /**
     * Percentage by how much the base price will increase
     */
    percentage: string;
}
/**
 * Hourly costs for a Server type in this Location
 */
export declare class GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly extends SpeakeasyBase {
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
 * Monthly costs for a Server type in this Location
 */
export declare class GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetPricing200ApplicationJSONPricingServerTypesPrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Server type in this Location
     */
    priceHourly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly;
    /**
     * Monthly costs for a Server type in this Location
     */
    priceMonthly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly;
}
export declare class GetPricing200ApplicationJSONPricingServerTypes extends SpeakeasyBase {
    /**
     * ID of the Server type the price is for
     */
    id: number;
    /**
     * Name of the Server type the price is for
     */
    name: string;
    /**
     * Server type costs per Location
     */
    prices: GetPricing200ApplicationJSONPricingServerTypesPrices[];
}
export declare class GetPricing200ApplicationJSONPricingTrafficPricePerTb extends SpeakeasyBase {
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
 * The cost of additional traffic per TB
 */
export declare class GetPricing200ApplicationJSONPricingTraffic extends SpeakeasyBase {
    pricePerTb: GetPricing200ApplicationJSONPricingTrafficPricePerTb;
}
export declare class GetPricing200ApplicationJSONPricingVolumePricePerGbMonth extends SpeakeasyBase {
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
 * The cost of Volume per GB/month
 */
export declare class GetPricing200ApplicationJSONPricingVolume extends SpeakeasyBase {
    pricePerGbMonth: GetPricing200ApplicationJSONPricingVolumePricePerGbMonth;
}
export declare class GetPricing200ApplicationJSONPricing extends SpeakeasyBase {
    /**
     * Currency the returned prices are expressed in, coded according to ISO 4217
     */
    currency: string;
    /**
     * The cost of one Floating IP per month
     */
    floatingIp: GetPricing200ApplicationJSONPricingFloatingIp;
    /**
     * Costs of Floating IPs types per Location and type
     */
    floatingIps: GetPricing200ApplicationJSONPricingFloatingIps[];
    /**
     * The cost of Image per GB/month
     */
    image: GetPricing200ApplicationJSONPricingImage;
    /**
     * Costs of Load Balancer types per Location and type
     */
    loadBalancerTypes: GetPricing200ApplicationJSONPricingLoadBalancerTypes[];
    /**
     * Costs of Primary IPs types per Location
     */
    primaryIps: GetPricing200ApplicationJSONPricingPrimaryIps[];
    /**
     * Will increase base Server costs by specific percentage
     */
    serverBackup: GetPricing200ApplicationJSONPricingServerBackup;
    /**
     * Costs of Server types per Location and type
     */
    serverTypes: GetPricing200ApplicationJSONPricingServerTypes[];
    /**
     * The cost of additional traffic per TB
     */
    traffic: GetPricing200ApplicationJSONPricingTraffic;
    /**
     * The VAT rate used for calculating prices with VAT
     */
    vatRate: string;
    /**
     * The cost of Volume per GB/month
     */
    volume: GetPricing200ApplicationJSONPricingVolume;
}
/**
 * The `pricing` key in the reply contains an pricing object with this structure
 */
export declare class GetPricing200ApplicationJSON extends SpeakeasyBase {
    pricing: GetPricing200ApplicationJSONPricing;
}
export declare class GetPricingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `pricing` key in the reply contains an pricing object with this structure
     */
    getPricing200ApplicationJSONObject?: GetPricing200ApplicationJSON;
}
