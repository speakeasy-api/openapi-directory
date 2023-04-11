import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointDisruptionRequest extends SpeakeasyBase {
    /**
     * Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true).
     */
    flattenResponse?: boolean;
    /**
     * Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.
     */
    getFamily?: boolean;
    /**
     * A comma-seperated list of stop point ids. Max. approx. 20 ids.
     *
     * @remarks
     *             You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.
     */
    ids: string[];
    includeRouteBlockedStops?: boolean;
}
export declare class StopPointDisruptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}
