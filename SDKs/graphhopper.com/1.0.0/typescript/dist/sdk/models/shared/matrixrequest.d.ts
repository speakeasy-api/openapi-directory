import { SpeakeasyBase } from "../../../internal/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";
export declare class MatrixRequest extends SpeakeasyBase {
    /**
     * Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).
     */
    failFast?: boolean;
    /**
     * See `curbsides`of symmetrical matrix
     */
    fromCurbsides?: string[];
    /**
     * See `point_hints`of symmetrical matrix
     */
    fromPointHints?: string[];
    /**
     * The starting points for the routes in an array of `[longitude,latitude]`. For instance, if you want to calculate three routes from point A such as A->1, A->2, A->3 then you have one `from_point` parameter and three `to_point` parameters.
     */
    fromPoints?: number[][];
    /**
     * Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.
     */
    outArrays?: string[];
    /**
     * See `snap_preventions` of symmetrical matrix
     */
    snapPreventions?: string[];
    /**
     * See `curbsides`of symmetrical matrix
     */
    toCurbsides?: string[];
    /**
     * See `point_hints`of symmetrical matrix
     */
    toPointHints?: string[];
    /**
     * The destination points for the routes in an array of `[longitude,latitude]`.
     */
    toPoints?: number[][];
    /**
     * Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.
     */
    turnCosts?: boolean;
    vehicle?: VehicleProfileIdEnum;
}
