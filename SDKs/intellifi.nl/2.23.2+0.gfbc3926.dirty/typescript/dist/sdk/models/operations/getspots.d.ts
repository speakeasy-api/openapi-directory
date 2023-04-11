import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpotsRequest extends SpeakeasyBase {
    /**
     * Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.
     */
    after?: Date;
    /**
     * Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    afterId?: string;
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.
     */
    before?: string;
    /**
     * Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    beforeId?: string;
    /**
     * Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.
     */
    from?: string;
    /**
     * Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    fromId?: string;
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Removes `url` fields from output and shows `_id` instead of `_url` in references.
     */
    idOnly?: boolean;
    /**
     * Filter based on the online status.
     */
    isOnline?: boolean;
    /**
     * Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
     */
    limit?: number;
    /**
     * Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
     */
    populate?: string;
    /**
     * Filter based on the amount of request made
     */
    requestCounter?: number;
    /**
     * Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
     */
    resultsOnly?: boolean;
    /**
     * Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.
     */
    select?: string;
    /**
     * Filter based on the serial number.
     */
    serialNumber?: number;
    /**
     * Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
     */
    sort?: string;
    /**
     * Filter on the time the resource was created.
     */
    timeCreated?: string;
    /**
     * Filter on the time the resource was last updated
     */
    timeUpdated?: string;
    /**
     * Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
     */
    timeoutS?: number;
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.
     */
    until?: string;
    /**
     * Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    untilId?: string;
}
export declare class GetSpots200ApplicationJSONResults3AntennaReportLocations extends SpeakeasyBase {
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
export declare class GetSpots200ApplicationJSONResults3 extends SpeakeasyBase {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    antennaReportLocations?: GetSpots200ApplicationJSONResults3AntennaReportLocations[];
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
export declare class GetSpots200ApplicationJSONResults2AntennaReportLocations extends SpeakeasyBase {
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
export declare class GetSpots200ApplicationJSONResults2 extends SpeakeasyBase {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    antennaReportLocations?: GetSpots200ApplicationJSONResults2AntennaReportLocations[];
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
export declare class GetSpots200ApplicationJSONResults1AntennaReportLocations extends SpeakeasyBase {
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
export declare class GetSpots200ApplicationJSONResults1 extends SpeakeasyBase {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    antennaReportLocations?: GetSpots200ApplicationJSONResults1AntennaReportLocations[];
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
/**
 * A JSON object containing a list of spots
 */
export declare class GetSpots200ApplicationJSON extends SpeakeasyBase {
    /**
     * The maximum number of items in the response (as set in the query or by default).
     */
    count?: number;
    /**
     * The maximum number of items available to return.
     */
    countCurrent?: number;
    /**
     * Becomes false when the number of results is smaller than limit.
     */
    isLimited?: boolean;
    /**
     * URL to the next page of items. ( null if none)
     */
    nextUrl?: string;
    /**
     * Amount of time, in milliseconds, the request needed to complete.
     */
    queryDurationMs?: number;
    results?: any[];
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetSpotsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A JSON object containing a list of spots
     */
    getSpots200ApplicationJSONObject?: GetSpots200ApplicationJSON;
}
