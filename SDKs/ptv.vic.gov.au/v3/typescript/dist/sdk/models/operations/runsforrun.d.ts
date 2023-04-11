import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunsForRunExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
export declare class RunsForRunRequest extends SpeakeasyBase {
    /**
     * Date of the request. (optional - defaults to now)
     */
    dateUtc?: Date;
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.
     */
    expand: RunsForRunExpandEnum[];
    /**
     * Indicates if geopath data will be returned (default = false)
     */
    includeGeopath?: boolean;
    /**
     * The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
     */
    runRef: string;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class RunsForRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * All trip/service run details for the specified run_ref.
     */
    v3RunsResponse?: shared.V3RunsResponse;
}
