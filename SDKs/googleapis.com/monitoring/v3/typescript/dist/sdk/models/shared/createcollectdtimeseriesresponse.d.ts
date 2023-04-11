import { SpeakeasyBase } from "../../../internal/utils";
import { CollectdPayloadError } from "./collectdpayloaderror";
import { CreateTimeSeriesSummary } from "./createtimeseriessummary";
/**
 * The CreateCollectdTimeSeries response.
 */
export declare class CreateCollectdTimeSeriesResponse extends SpeakeasyBase {
    /**
     * Records the error status for points that were not written due to an error in the request.Failed requests for which nothing is written will return an error response instead. Requests where data points were rejected by the backend will set summary instead.
     */
    payloadErrors?: CollectdPayloadError[];
    /**
     * Summary of the result of a failed request to write data to a time series.
     */
    summary?: CreateTimeSeriesSummary;
}
