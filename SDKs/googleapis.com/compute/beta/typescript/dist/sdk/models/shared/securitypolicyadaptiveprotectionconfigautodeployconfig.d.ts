import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration options for Adaptive Protection auto-deploy feature.
 */
export declare class SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig extends SpeakeasyBase {
    confidenceThreshold?: number;
    expirationSec?: number;
    impactedBaselineThreshold?: number;
    loadThreshold?: number;
}
