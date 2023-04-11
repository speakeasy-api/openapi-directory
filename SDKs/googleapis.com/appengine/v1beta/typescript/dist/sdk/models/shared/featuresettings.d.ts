import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The feature specific settings to be used in the application. These define behaviors that are user configurable.
 */
export declare class FeatureSettings extends SpeakeasyBase {
    /**
     * Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to 'readiness_check' and 'liveness_check' values instead of 'health_check' ones. Once the legacy 'health_check' behavior is deprecated, and this value is always true, this setting can be removed.
     */
    splitHealthChecks?: boolean;
    /**
     * If true, use Container-Optimized OS (https://cloud.google.com/container-optimized-os/) base image for VMs, rather than a base Debian image.
     */
    useContainerOptimizedOs?: boolean;
}
