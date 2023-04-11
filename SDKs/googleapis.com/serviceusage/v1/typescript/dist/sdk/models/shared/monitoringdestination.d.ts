import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of a specific monitoring destination (the producer project or the consumer project).
 */
export declare class MonitoringDestination extends SpeakeasyBase {
    /**
     * Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section.
     */
    metrics?: string[];
    /**
     * The monitored resource type. The type must be defined in Service.monitored_resources section.
     */
    monitoredResource?: string;
}
