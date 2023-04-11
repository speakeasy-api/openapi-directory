import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlaceGetByGeoRequest extends SpeakeasyBase {
    /**
     * An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)
     */
    activeOnly?: boolean;
    /**
     * An optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint)
     */
    categories?: string[];
    /**
     * Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned
     */
    includeChildren?: boolean;
    /**
     * If specified, limits the number of returned places equal to the given value
     */
    numberOfPlacesToReturn?: number;
    placeGeoLat?: number;
    placeGeoLon?: number;
    placeGeoNeLat?: number;
    placeGeoNeLon?: number;
    placeGeoSwLat?: number;
    placeGeoSwLon?: number;
    /**
     * The radius of the bounding circle in metres when only lat/lon are specified.
     */
    radius?: number;
    /**
     * Place types to filter on, or null to return all types
     */
    type?: string[];
}
export declare class PlaceGetByGeoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
