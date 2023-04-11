import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetServerTypesRequest extends SpeakeasyBase {
    /**
     * Can be used to filter Server types by their name. The response will only contain the Server type matching the specified name.
     */
    name?: string;
}
/**
 * Type of cpu
 */
export declare enum GetServerTypes200ApplicationJSONServerTypesCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
 */
export declare class GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly extends SpeakeasyBase {
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
export declare class GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetServerTypes200ApplicationJSONServerTypesPrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Server type in this Location
     */
    priceHourly: GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly;
    /**
     * Monthly costs for a Server type in this Location
     */
    priceMonthly: GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly;
}
/**
 * Type of Server boot drive. Local has higher speed. Network has better availability.
 */
export declare enum GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum {
    Local = "local",
    Network = "network"
}
export declare class GetServerTypes200ApplicationJSONServerTypes extends SpeakeasyBase {
    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;
    /**
     * Type of cpu
     */
    cpuType: GetServerTypes200ApplicationJSONServerTypesCpuTypeEnum;
    /**
     * True if Server type is deprecated
     */
    deprecated: boolean;
    /**
     * Description of the Server type
     */
    description: string;
    /**
     * Disk size a Server of this type will have in GB
     */
    disk: number;
    /**
     * ID of the Server type
     */
    id: number;
    /**
     * Memory a Server of this type will have in GB
     */
    memory: number;
    /**
     * Unique identifier of the Server type
     */
    name: string;
    /**
     * Prices in different Locations
     */
    prices: GetServerTypes200ApplicationJSONServerTypesPrices[];
    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    storageType: GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum;
}
/**
 * The `server_types` key in the reply contains an array of Server type objects with this structure
 */
export declare class GetServerTypes200ApplicationJSON extends SpeakeasyBase {
    serverTypes: GetServerTypes200ApplicationJSONServerTypes[];
}
export declare class GetServerTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `server_types` key in the reply contains an array of Server type objects with this structure
     */
    getServerTypes200ApplicationJSONObject?: GetServerTypes200ApplicationJSON;
}
