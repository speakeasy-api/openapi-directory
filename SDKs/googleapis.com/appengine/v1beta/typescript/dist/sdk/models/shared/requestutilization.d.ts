import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Target scaling by request utilization. Only applicable in the App Engine flexible environment.
 */
export declare class RequestUtilization extends SpeakeasyBase {
    /**
     * Target number of concurrent requests.
     */
    targetConcurrentRequests?: number;
    /**
     * Target requests per second.
     */
    targetRequestCountPerSecond?: number;
}
