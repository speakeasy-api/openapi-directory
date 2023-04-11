import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the integration.
 */
export declare enum ClusterTelemetryTypeEnum {
    Unspecified = "UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    SystemOnly = "SYSTEM_ONLY"
}
/**
 * Telemetry integration for the cluster.
 */
export declare class ClusterTelemetry extends SpeakeasyBase {
    /**
     * Type of the integration.
     */
    type?: ClusterTelemetryTypeEnum;
}
