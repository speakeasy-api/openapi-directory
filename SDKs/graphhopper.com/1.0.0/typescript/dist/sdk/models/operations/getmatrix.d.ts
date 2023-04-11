import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMatrixCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare enum GetMatrixFromCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare enum GetMatrixToCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare class GetMatrixRequest extends SpeakeasyBase {
    /**
     * Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
     */
    curbside?: GetMatrixCurbsideEnum[];
    /**
     * Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).
     */
    failFast?: boolean;
    /**
     * Curbside setting for the from_point parameter. See curbside.
     */
    fromCurbside?: GetMatrixFromCurbsideEnum[];
    /**
     * The starting points for the routes in `latitude,longitude`. E.g. if you want to calculate the three routes A-&gt;1, A-&gt;2, A-&gt;3 then you have one from_point parameter and three to_point parameters.
     */
    fromPoint?: string[];
    /**
     * For the from_point parameter. See point_hint
     */
    fromPointHint?: string[];
    /**
     * Specifies which arrays should be included in the response. Specify one or more of the following options 'weights', 'times', 'distances'. To specify more than one array use e.g. out_array=times&out_array=distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.
     */
    outArray?: string[];
    /**
     * Specify multiple points in `latitude,longitude` for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.
     */
    point?: string[];
    /**
     * Optional parameter. Specifies a hint for each `point` parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
     */
    pointHint?: string[];
    /**
     * Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`
     *
     * @remarks
     *
     */
    snapPrevention?: string[];
    /**
     * Curbside setting for the to_point parameter. See curbside.
     */
    toCurbside?: GetMatrixToCurbsideEnum[];
    /**
     * The destination points for the routes in `latitude,longitude`.
     */
    toPoint?: string[];
    /**
     * For the to_point parameter. See point_hint
     */
    toPointHint?: string[];
    /**
     * Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.
     */
    turnCosts?: boolean;
    /**
     * The vehicle profile for which the matrix should be calculated.
     */
    vehicle?: shared.VehicleProfileIdEnum;
}
export declare class GetMatrixResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected Error
     */
    ghError?: shared.GHError;
    headers?: Record<string, string[]>;
    /**
     * Matrix API response
     */
    matrixResponse?: shared.MatrixResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
