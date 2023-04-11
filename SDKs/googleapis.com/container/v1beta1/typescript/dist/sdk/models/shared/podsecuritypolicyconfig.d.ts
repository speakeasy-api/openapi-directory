import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the PodSecurityPolicy feature.
 */
export declare class PodSecurityPolicyConfig extends SpeakeasyBase {
    /**
     * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
     */
    enabled?: boolean;
}
