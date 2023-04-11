import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredProject } from "./monitoredproject";
/**
 * Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.
 */
export declare class MetricsScope extends SpeakeasyBase {
    /**
     * Output only. The time when this Metrics Scope was created.
     */
    createTime?: string;
    /**
     * Output only. The list of projects monitored by this Metrics Scope.
     */
    monitoredProjects?: MonitoredProject[];
    /**
     * Immutable. The resource name of the Monitoring Metrics Scope. On input, the resource name can be specified with the scoping project ID or number. On output, the resource name is specified with the scoping project number. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}
     */
    name?: string;
    /**
     * Output only. The time when this Metrics Scope record was last updated.
     */
    updateTime?: string;
}
