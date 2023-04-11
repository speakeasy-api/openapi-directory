import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Summary of the result of a failed request to write data to a time series.
 */
export declare class CreateTimeSeriesSummary extends SpeakeasyBase {
    /**
     * The number of points that failed to be written. Order is not guaranteed.
     */
    errors?: ErrorT[];
    /**
     * The number of points that were successfully written.
     */
    successPointCount?: number;
    /**
     * The number of points in the request.
     */
    totalPointCount?: number;
}
