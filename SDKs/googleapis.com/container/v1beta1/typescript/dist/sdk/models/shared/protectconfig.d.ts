import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadConfig } from "./workloadconfig";
/**
 * Sets which mode to use for Protect workload vulnerability scanning feature.
 */
export declare enum ProtectConfigWorkloadVulnerabilityModeEnum {
    WorkloadVulnerabilityModeUnspecified = "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Basic = "BASIC"
}
/**
 * ProtectConfig defines the flags needed to enable/disable features for the Protect API.
 */
export declare class ProtectConfig extends SpeakeasyBase {
    /**
     * WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.
     */
    workloadConfig?: WorkloadConfig;
    /**
     * Sets which mode to use for Protect workload vulnerability scanning feature.
     */
    workloadVulnerabilityMode?: ProtectConfigWorkloadVulnerabilityModeEnum;
}
