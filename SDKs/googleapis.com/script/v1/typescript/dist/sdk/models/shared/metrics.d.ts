import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsValue } from "./metricsvalue";
/**
 * Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
 */
export declare class Metrics extends SpeakeasyBase {
    /**
     * Number of active users.
     */
    activeUsers?: MetricsValue[];
    /**
     * Number of failed executions.
     */
    failedExecutions?: MetricsValue[];
    /**
     * Number of total executions.
     */
    totalExecutions?: MetricsValue[];
}
