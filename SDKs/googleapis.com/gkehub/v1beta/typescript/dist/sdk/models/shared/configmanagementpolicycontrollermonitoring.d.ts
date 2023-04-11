import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigManagementPolicyControllerMonitoringBackendsEnum {
    MonitoringBackendUnspecified = "MONITORING_BACKEND_UNSPECIFIED",
    Prometheus = "PROMETHEUS",
    CloudMonitoring = "CLOUD_MONITORING"
}
/**
 * PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
 */
export declare class ConfigManagementPolicyControllerMonitoring extends SpeakeasyBase {
    /**
     * Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export.
     */
    backends?: ConfigManagementPolicyControllerMonitoringBackendsEnum[];
}
