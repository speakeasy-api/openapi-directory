import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference.
 */
export declare class Count extends SpeakeasyBase {
    /**
     * Optional. Optional constraint on the maximum number of documents to count. This provides a way to set an upper bound on the number of documents to scan, limiting latency, and cost. Unspecified is interpreted as no bound. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be greater than zero when present.
     */
    upTo?: string;
}
