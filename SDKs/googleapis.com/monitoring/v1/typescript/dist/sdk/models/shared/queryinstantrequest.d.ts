import { SpeakeasyBase } from "../../../internal/utils";
/**
 * QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.
 */
export declare class QueryInstantRequest extends SpeakeasyBase {
    /**
     * A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/.
     */
    query?: string;
    /**
     * The single point in time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     */
    time?: string;
    /**
     * An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field.
     */
    timeout?: string;
}
