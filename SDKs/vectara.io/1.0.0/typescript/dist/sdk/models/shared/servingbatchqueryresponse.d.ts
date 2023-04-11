import { SpeakeasyBase } from "../../../internal/utils";
import { ComvectaraStatus } from "./comvectarastatus";
import { ServingPerformanceMetrics } from "./servingperformancemetrics";
import { ServingResponseSet } from "./servingresponseset";
/**
 * A successful response.
 */
export declare class ServingBatchQueryResponse extends SpeakeasyBase {
    /**
     * Basic performance metrics that can be attached to a server response.
     */
    metrics?: ServingPerformanceMetrics;
    responseSet?: ServingResponseSet[];
    status?: ComvectaraStatus[];
}
