import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the paths to the artifacts, relative to the URI, for a phase.
 */
export declare class PhaseArtifact extends SpeakeasyBase {
    /**
     * Output only. File path of the rendered manifest relative to the URI.
     */
    manifestPath?: string;
    /**
     * Output only. File path of the resolved Skaffold configuration relative to the URI.
     */
    skaffoldConfigPath?: string;
}
