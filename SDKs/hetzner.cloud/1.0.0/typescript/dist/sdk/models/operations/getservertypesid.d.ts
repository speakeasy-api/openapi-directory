import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetServerTypesIdRequest extends SpeakeasyBase {
    /**
     * ID of Server Type
     */
    id: number;
}
/**
 * Type of cpu
 */
export declare enum GetServerTypesId200ApplicationJSONServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
 */
export declare class GetServerTypesId200ApplicationJSONServerTypePricesPriceHourly extends SpeakeasyBase {
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
export declare class GetServerTypesId200ApplicationJSONServerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetServerTypesId200ApplicationJSONServerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Server type in this Location
     */
    priceHourly: GetServerTypesId200ApplicationJSONServerTypePricesPriceHourly;
    /**
     * Monthly costs for a Server type in this Location
     */
    priceMonthly: GetServerTypesId200ApplicationJSONServerTypePricesPriceMonthly;
}
/**
 * Type of Server boot drive. Local has higher speed. Network has better availability.
 */
export declare enum GetServerTypesId200ApplicationJSONServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
export declare class GetServerTypesId200ApplicationJSONServerType extends SpeakeasyBase {
    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;
    /**
     * Type of cpu
     */
    cpuType: GetServerTypesId200ApplicationJSONServerTypeCpuTypeEnum;
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
    prices: GetServerTypesId200ApplicationJSONServerTypePrices[];
    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    storageType: GetServerTypesId200ApplicationJSONServerTypeStorageTypeEnum;
}
/**
 * The `server_type` key in the reply contains a Server type object with this structure
 */
export declare class GetServerTypesId200ApplicationJSON extends SpeakeasyBase {
    serverType: GetServerTypesId200ApplicationJSONServerType;
}
export declare class GetServerTypesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `server_type` key in the reply contains a Server type object with this structure
     */
    getServerTypesId200ApplicationJSONObject?: GetServerTypesId200ApplicationJSON;
}
