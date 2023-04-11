import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunConfig } from "./cloudrunconfig";
import { KubernetesConfig } from "./kubernetesconfig";
/**
 * RuntimeConfig contains the runtime specific configurations for a deployment strategy.
 */
export declare class RuntimeConfig extends SpeakeasyBase {
    /**
     * CloudRunConfig contains the Cloud Run runtime configuration.
     */
    cloudRun?: CloudRunConfig;
    /**
     * KubernetesConfig contains the Kubernetes runtime configuration.
     */
    kubernetes?: KubernetesConfig;
}
