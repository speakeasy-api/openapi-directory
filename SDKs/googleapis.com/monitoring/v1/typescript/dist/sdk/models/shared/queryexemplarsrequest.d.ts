import { SpeakeasyBase } from "../../../internal/utils";
/**
 * QueryExemplarsRequest holds all parameters of the Prometheus upstream API for querying exemplars.
 */
export declare class QueryExemplarsRequest extends SpeakeasyBase {
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
}
