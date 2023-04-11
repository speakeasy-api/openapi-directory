import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDatacentersIdRequest extends SpeakeasyBase {
    /**
     * ID of Datacenter
     */
    id: number;
}
export declare class GetDatacentersId200ApplicationJSONDatacenterLocation extends SpeakeasyBase {
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
export declare class GetDatacentersId200ApplicationJSONDatacenterServerTypes extends SpeakeasyBase {
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
export declare class GetDatacentersId200ApplicationJSONDatacenter extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: GetDatacentersId200ApplicationJSONDatacenterLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: GetDatacentersId200ApplicationJSONDatacenterServerTypes;
}
/**
 * The `datacenter` key in the reply contains a Datacenter object with this structure
 */
export declare class GetDatacentersId200ApplicationJSON extends SpeakeasyBase {
    datacenter: GetDatacentersId200ApplicationJSONDatacenter;
}
export declare class GetDatacentersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `datacenter` key in the reply contains a Datacenter object with this structure
     */
    getDatacentersId200ApplicationJSONObject?: GetDatacentersId200ApplicationJSON;
}
