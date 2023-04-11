import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpotByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetSpotById200ApplicationJson3AntennaReportLocations extends SpeakeasyBase {
    /**
     * Antenna number
     */
    antennaNumber?: number;
    reportLocation?: shared.Location;
    /**
     * Unique identifier for resource.
     */
    reportLocationId?: string;
    /**
     * Url to the individual resource.
     */
    reportLocationUrl?: string;
}
export declare class GetSpotById200ApplicationJson3 extends SpeakeasyBase {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    antennaReportLocations?: GetSpotById200ApplicationJson3AntennaReportLocations[];
    /**
     * JSON object with possible settings. Refer to individual service documentation for a good overview.
     */
    config?: Record<string, any>;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: shared.GeoCoords;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Whether or not this resource is actively connected to the Brain.
     */
    isOnline?: boolean;
    /**
     * Url to the individual resource.
     */
    reportLocationUrl?: string;
    /**
     * The total number of HTTP requests that this resource has done.
     */
    requestCounter?: number;
    /**
     * Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    senses?: Record<string, any>;
    /**
     * Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    sensesRequest?: Record<string, any>;
    /**
     * This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.
     */
    serialNumber?: number;
    /**
     * An object with specific information about the spot, directly send by the spot itself when the connection is created.
     */
    status?: any;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetSpotById200ApplicationJson2AntennaReportLocations extends SpeakeasyBase {
    /**
     * Antenna number
     */
    antennaNumber?: number;
    reportLocation?: shared.Location;
    /**
     * Unique identifier for resource.
     */
    reportLocationId?: string;
    /**
     * Url to the individual resource.
     */
    reportLocationUrl?: string;
}
export declare class GetSpotById200ApplicationJson2 extends SpeakeasyBase {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    antennaReportLocations?: GetSpotById200ApplicationJson2AntennaReportLocations[];
    /**
     * JSON object with possible settings. Refer to individual service documentation for a good overview.
     */
    config?: Record<string, any>;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: shared.GeoCoords;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Whether or not this resource is actively connected to the Brain.
     */
    isOnline?: boolean;
    /**
     * Unique identifier for resource.
     */
    reportLocationId?: string;
    /**
     * The total number of HTTP requests that this resource has done.
     */
    requestCounter?: number;
    /**
     * Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    senses?: Record<string, any>;
    /**
     * Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    sensesRequest?: Record<string, any>;
    /**
     * This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.
     */
    serialNumber?: number;
    /**
     * An object with specific information about the spot, directly send by the spot itself when the connection is created.
     */
    status?: any;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetSpotById200ApplicationJson1AntennaReportLocations extends SpeakeasyBase {
    /**
     * Antenna number
     */
    antennaNumber?: number;
    reportLocation?: shared.Location;
    /**
     * Unique identifier for resource.
     */
    reportLocationId?: string;
    /**
     * Url to the individual resource.
     */
    reportLocationUrl?: string;
}
export declare class GetSpotById200ApplicationJson1 extends SpeakeasyBase {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    antennaReportLocations?: GetSpotById200ApplicationJson1AntennaReportLocations[];
    /**
     * JSON object with possible settings. Refer to individual service documentation for a good overview.
     */
    config?: Record<string, any>;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: shared.GeoCoords;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Whether or not this resource is actively connected to the Brain.
     */
    isOnline?: boolean;
    reportLocation?: shared.Location;
    /**
     * The total number of HTTP requests that this resource has done.
     */
    requestCounter?: number;
    /**
     * Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    senses?: Record<string, any>;
    /**
     * Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    sensesRequest?: Record<string, any>;
    /**
     * This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.
     */
    serialNumber?: number;
    /**
     * An object with specific information about the spot, directly send by the spot itself when the connection is created.
     */
    status?: any;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetSpotByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the spot
     */
    spotGet?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
