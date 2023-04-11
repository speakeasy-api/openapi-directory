import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsScope } from "./metricsscope";
/**
 * Response for the ListMetricsScopesByMonitoredProject method.
 */
export declare class ListMetricsScopesByMonitoredProjectResponse extends SpeakeasyBase {
    /**
     * A set of all metrics scopes that the specified monitored project has been added to.
     */
    metricsScopes?: MetricsScope[];
}
