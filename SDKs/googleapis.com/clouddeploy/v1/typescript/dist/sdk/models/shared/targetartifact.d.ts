import { SpeakeasyBase } from "../../../internal/utils";
import { PhaseArtifact } from "./phaseartifact";
/**
 * The artifacts produced by a target render operation.
 */
export declare class TargetArtifact extends SpeakeasyBase {
    /**
     * Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location.
     */
    artifactUri?: string;
    /**
     * Output only. File path of the rendered manifest relative to the URI.
     */
    manifestPath?: string;
    /**
     * Output only. Map from the phase ID to the phase artifacts for the `Target`.
     */
    phaseArtifacts?: Record<string, PhaseArtifact>;
    /**
     * Output only. File path of the resolved Skaffold configuration relative to the URI.
     */
    skaffoldConfigPath?: string;
}
