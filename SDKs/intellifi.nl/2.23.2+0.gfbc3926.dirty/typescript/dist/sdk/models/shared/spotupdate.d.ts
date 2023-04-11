import { SpeakeasyBase } from "../../../internal/utils";
import { GeoCoordsInput } from "./geocoords";
export declare class SpotUpdateAntennaReportLocationsInput extends SpeakeasyBase {
    /**
     * Antenna number
     */
    antennaNumber?: number;
}
/**
 * A JSON object containing spot information
 */
export declare class SpotUpdateInput extends SpeakeasyBase {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    antennaReportLocations?: SpotUpdateAntennaReportLocationsInput[];
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: GeoCoordsInput;
    /**
     * Unique identifier for resource.
     */
    reportLocation?: string;
    /**
     * Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    sensesRequest?: Record<string, any>;
}
