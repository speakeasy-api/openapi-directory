import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWorkspaceId } from "./cloudworkspaceid";
/**
 * A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
 */
export declare class CloudWorkspaceSourceContext extends SpeakeasyBase {
    /**
     * The ID of the snapshot. An empty snapshot_id refers to the most recent snapshot.
     */
    snapshotId?: string;
    /**
     * A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.
     */
    workspaceId?: CloudWorkspaceId;
}
