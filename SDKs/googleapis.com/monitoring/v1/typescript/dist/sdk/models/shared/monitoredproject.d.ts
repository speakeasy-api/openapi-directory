import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
 */
export declare class MonitoredProjectInput extends SpeakeasyBase {
    /**
     * Immutable. The resource name of the MonitoredProject. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}
     */
    name?: string;
}
/**
 * A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
 */
export declare class MonitoredProject extends SpeakeasyBase {
    /**
     * Output only. The time when this MonitoredProject was created.
     */
    createTime?: string;
    /**
     * Immutable. The resource name of the MonitoredProject. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}
     */
    name?: string;
}
