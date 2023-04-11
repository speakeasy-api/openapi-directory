import { SpeakeasyBase } from "../../../internal/utils";
import { CanaryDeployment } from "./canarydeployment";
import { CustomCanaryDeployment } from "./customcanarydeployment";
import { RuntimeConfig } from "./runtimeconfig";
/**
 * Canary represents the canary deployment strategy.
 */
export declare class Canary extends SpeakeasyBase {
    /**
     * CanaryDeployment represents the canary deployment configuration
     */
    canaryDeployment?: CanaryDeployment;
    /**
     * CustomCanaryDeployment represents the custom canary deployment configuration.
     */
    customCanaryDeployment?: CustomCanaryDeployment;
    /**
     * RuntimeConfig contains the runtime specific configurations for a deployment strategy.
     */
    runtimeConfig?: RuntimeConfig;
}
