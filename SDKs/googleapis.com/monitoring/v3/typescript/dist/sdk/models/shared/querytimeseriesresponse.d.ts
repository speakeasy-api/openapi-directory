import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { TimeSeriesData } from "./timeseriesdata";
import { TimeSeriesDescriptor } from "./timeseriesdescriptor";
/**
 * The QueryTimeSeries response.
 */
export declare class QueryTimeSeriesResponse extends SpeakeasyBase {
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * Query execution errors that may have caused the time series data returned to be incomplete. The available data will be available in the response.
     */
    partialErrors?: Status[];
    /**
     * The time series data.
     */
    timeSeriesData?: TimeSeriesData[];
    /**
     * A descriptor for the labels and points in a time series.
     */
    timeSeriesDescriptor?: TimeSeriesDescriptor;
}
