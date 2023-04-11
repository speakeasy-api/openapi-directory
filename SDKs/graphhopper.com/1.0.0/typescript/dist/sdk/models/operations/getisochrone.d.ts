import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Use `"shortest"` to get an isodistance line instead of an isochrone.
 */
export declare enum GetIsochroneWeightingEnum {
    Fastest = "fastest",
    Shortest = "shortest"
}
export declare class GetIsochroneRequest extends SpeakeasyBase {
    /**
     * Number by which to divide the given `time_limit` to create `buckets` nested isochrones of time intervals `time_limit-n*time_limit/buckets`. Applies analogously to `distance_limit`.
     */
    buckets?: number;
    /**
     * Specify which distance the vehicle should travel. In meters.
     */
    distanceLimit?: number;
    /**
     * Specify the start coordinate
     */
    point: string;
    /**
     * If `false` the flow goes from point to the polygon, if `true` the flow goes from the polygon "inside" to the point.
     *
     * @remarks
     * Example use case for `false`&#58; *How many potential customer can be reached within 30min travel time from your store* vs. `true`&#58; *How many customers can reach your store within 30min travel time.*
     *
     */
    reverseFlow?: boolean;
    /**
     * Specify which time the vehicle should travel. In seconds.
     */
    timeLimit?: number;
    /**
     * The vehicle profile for which the route should be calculated.
     *
     * @remarks
     *
     */
    vehicle?: shared.VehicleProfileIdEnum;
    /**
     * Use `"shortest"` to get an isodistance line instead of an isochrone.
     */
    weighting?: GetIsochroneWeightingEnum;
}
export declare class GetIsochroneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected Error
     */
    ghError?: shared.GHError;
    /**
     * Isochrone Result
     */
    isochroneResponse?: shared.IsochroneResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
