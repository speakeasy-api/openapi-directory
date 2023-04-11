import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedPrometheusConfig } from "./managedprometheusconfig";
import { MonitoringComponentConfig } from "./monitoringcomponentconfig";
/**
 * MonitoringConfig is cluster monitoring configuration.
 */
export declare class MonitoringConfig extends SpeakeasyBase {
    /**
     * MonitoringComponentConfig is cluster monitoring component configuration.
     */
    componentConfig?: MonitoringComponentConfig;
    /**
     * ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus.
     */
    managedPrometheusConfig?: ManagedPrometheusConfig;
}
