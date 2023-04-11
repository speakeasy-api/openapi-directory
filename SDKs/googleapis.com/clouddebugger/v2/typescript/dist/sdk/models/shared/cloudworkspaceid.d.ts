import { SpeakeasyBase } from "../../../internal/utils";
import { RepoId } from "./repoid";
/**
 * A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.
 */
export declare class CloudWorkspaceId extends SpeakeasyBase {
    /**
     * The unique name of the workspace within the repo. This is the name chosen by the client in the Source API's CreateWorkspace method.
     */
    name?: string;
    /**
     * A unique identifier for a cloud repo.
     */
    repoId?: RepoId;
}
