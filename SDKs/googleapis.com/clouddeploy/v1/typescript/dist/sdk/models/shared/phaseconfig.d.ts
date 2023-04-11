import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PhaseConfig represents the configuration for a phase in the custom canary deployment.
 */
export declare class PhaseConfig extends SpeakeasyBase {
    /**
     * Required. Percentage deployment for the phase.
     */
    percentage?: number;
    /**
     * Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     */
    phaseId?: string;
    /**
     * Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
     */
    profiles?: string[];
    /**
     * Whether to run verify tests after the deployment.
     */
    verify?: boolean;
}
