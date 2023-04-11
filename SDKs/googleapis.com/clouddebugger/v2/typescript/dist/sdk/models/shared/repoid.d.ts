import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectRepoId } from "./projectrepoid";
/**
 * A unique identifier for a cloud repo.
 */
export declare class RepoId extends SpeakeasyBase {
    /**
     * Selects a repo using a Google Cloud Platform project ID (e.g. winged-cargo-31) and a repo name within that project.
     */
    projectRepoId?: ProjectRepoId;
    /**
     * A server-assigned, globally unique identifier.
     */
    uid?: string;
}
