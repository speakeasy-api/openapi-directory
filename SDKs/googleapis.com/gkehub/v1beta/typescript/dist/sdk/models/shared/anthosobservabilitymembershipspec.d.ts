import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **Anthosobservability**: Per-Membership Feature spec.
 */
export declare class AnthosObservabilityMembershipSpec extends SpeakeasyBase {
    /**
     * Use full of metrics rather than optimized metrics. See https://cloud.google.com/anthos/clusters/docs/on-prem/1.8/concepts/logging-and-monitoring#optimized_metrics_default_metrics
     */
    doNotOptimizeMetrics?: boolean;
    /**
     * Enable collecting and reporting metrics and logs from user apps.
     */
    enableStackdriverOnApplications?: boolean;
    /**
     * the version of stackdriver operator used by this feature
     */
    version?: string;
}
