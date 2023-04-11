import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a latency threshold SLI.
 */
export declare class LatencyCriteria extends SpeakeasyBase {
    /**
     * Good service is defined to be the count of requests made to this service that return in no more than threshold.
     */
    threshold?: string;
}
