import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of a specific billing destination (Currently only support bill against consumer project).
 */
export declare class BillingDestination extends SpeakeasyBase {
    /**
     * Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section.
     */
    metrics?: string[];
    /**
     * The monitored resource type. The type must be defined in Service.monitored_resources section.
     */
    monitoredResource?: string;
}
