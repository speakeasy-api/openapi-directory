import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The lifecycle state of the folder. Updates to the lifecycle_state must be performed via DeleteFolder and UndeleteFolder.
 */
export declare enum FolderLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
 */
export declare class Folder extends SpeakeasyBase {
    /**
     * Output only. Timestamp when the Folder was created. Assigned by the server.
     */
    createTime?: string;
    /**
     * The folder's display name. A folder's display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`.
     */
    displayName?: string;
    /**
     * Output only. The lifecycle state of the folder. Updates to the lifecycle_state must be performed via DeleteFolder and UndeleteFolder.
     */
    lifecycleState?: FolderLifecycleStateEnum;
    /**
     * Output only. The resource name of the Folder. Its format is `folders/{folder_id}`, for example: "folders/1234".
     */
    name?: string;
    /**
     * Required. The Folder's parent's resource name. Updates to the folder's parent must be performed via MoveFolder.
     */
    parent?: string;
}
/**
 * A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
 */
export declare class FolderInput extends SpeakeasyBase {
    /**
     * The folder's display name. A folder's display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`.
     */
    displayName?: string;
    /**
     * Required. The Folder's parent's resource name. Updates to the folder's parent must be performed via MoveFolder.
     */
    parent?: string;
}
