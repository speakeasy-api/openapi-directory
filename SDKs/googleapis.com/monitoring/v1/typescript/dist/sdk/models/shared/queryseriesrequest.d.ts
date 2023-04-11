import { SpeakeasyBase } from "../../../internal/utils";
/**
 * QuerySeries holds all parameters of the Prometheus upstream API for querying series.
 */
export declare class QuerySeriesRequest extends SpeakeasyBase {
    /**
     * The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     */
    end?: string;
    /**
     * The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     */
    start?: string;
}
