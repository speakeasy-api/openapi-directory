import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDatacentersRequest extends SpeakeasyBase {
    /**
     * Can be used to filter Datacenters by their name. The response will only contain the Datacenter matching the specified name. When the name does not match the Datacenter name format, an `invalid_input` error is returned.
     */
    name?: string;
}
export declare class GetDatacenters200ApplicationJSONDatacentersLocation extends SpeakeasyBase {
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
export declare class GetDatacenters200ApplicationJSONDatacentersServerTypes extends SpeakeasyBase {
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
export declare class GetDatacenters200ApplicationJSONDatacenters extends SpeakeasyBase {
    /**
     * Description of the Datacenter
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    location: GetDatacenters200ApplicationJSONDatacentersLocation;
    /**
     * Unique identifier of the Datacenter
     */
    name: string;
    /**
     * The Server types the Datacenter can handle
     */
    serverTypes: GetDatacenters200ApplicationJSONDatacentersServerTypes;
}
/**
 * The reply contains the `datacenters` and `recommendation` keys
 */
export declare class GetDatacenters200ApplicationJSON extends SpeakeasyBase {
    datacenters: GetDatacenters200ApplicationJSONDatacenters[];
    /**
     * The Datacenter which is recommended to be used to create new Servers.
     */
    recommendation: number;
}
export declare class GetDatacentersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The reply contains the `datacenters` and `recommendation` keys
     */
    getDatacenters200ApplicationJSONObject?: GetDatacenters200ApplicationJSON;
}
