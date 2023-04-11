import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Artifact policy configuration for the repository contents.
 */
export declare class UpstreamPolicy extends SpeakeasyBase {
    /**
     * The user-provided ID of the upstream policy.
     */
    id?: string;
    /**
     * Entries with a greater priority value take precedence in the pull order.
     */
    priority?: number;
    /**
     * A reference to the repository resource, for example: "projects/p1/locations/us-central1/repositories/repo1".
     */
    repository?: string;
}
