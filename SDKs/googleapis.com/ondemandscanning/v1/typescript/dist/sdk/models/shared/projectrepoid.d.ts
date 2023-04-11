import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
 */
export declare class ProjectRepoId extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId?: string;
    /**
     * The name of the repo. Leave empty for the default repo.
     */
    repoName?: string;
}
