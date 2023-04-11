import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic performance metrics that can be attached to a server response.
 */
export declare class ServingPerformanceMetrics extends SpeakeasyBase {
    /**
     * How long it took to encode the query.
     */
    queryEncodeMs?: number;
    /**
     * How long it took to rerank the results.
     */
    rerankMs?: number;
    /**
     * How long it took to retrieve relevant results.
     */
    retrievalMs?: number;
    /**
     * How long it took to retrieve user data.
     */
    userdataRetrievalMs?: number;
}
