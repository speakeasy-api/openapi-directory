import { SpeakeasyBase } from "../../../internal/utils";
/**
 * QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters.
 */
export declare class QueryRangeRequest extends SpeakeasyBase {
    /**
     * The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     */
    end?: string;
    /**
     * A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/.
     */
    query?: string;
    /**
     * The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     */
    start?: string;
    /**
     * The resolution of query result. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field.
     */
    step?: string;
    /**
     * An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field.
     */
    timeout?: string;
}
