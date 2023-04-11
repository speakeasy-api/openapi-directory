import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The lifecycle state of the folder. Updates to the state must be performed using DeleteFolder and UndeleteFolder.
 */
export declare enum FolderStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * A folder in an organization's resource hierarchy, used to organize that organization's resources.
 */
export declare class Folder extends SpeakeasyBase {
    /**
     * Output only. Timestamp when the folder was created.
     */
    createTime?: string;
    /**
     * Output only. Timestamp when the folder was requested to be deleted.
     */
    deleteTime?: string;
    /**
     * The folder's display name. A folder's display name must be unique amongst its siblings. For example, no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`.
     */
    displayName?: string;
    /**
     * Output only. A checksum computed by the server based on the current value of the folder resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Output only. The resource name of the folder. Its format is `folders/{folder_id}`, for example: "folders/1234".
     */
    name?: string;
    /**
     * Required. The folder's parent's resource name. Updates to the folder's parent must be performed using MoveFolder.
     */
    parent?: string;
    /**
     * Output only. The lifecycle state of the folder. Updates to the state must be performed using DeleteFolder and UndeleteFolder.
     */
    state?: FolderStateEnum;
    /**
     * Output only. Timestamp when the folder was last modified.
     */
    updateTime?: string;
}
/**
 * A folder in an organization's resource hierarchy, used to organize that organization's resources.
 */
export declare class FolderInput extends SpeakeasyBase {
    /**
     * The folder's display name. A folder's display name must be unique amongst its siblings. For example, no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`.
     */
    displayName?: string;
    /**
     * Required. The folder's parent's resource name. Updates to the folder's parent must be performed using MoveFolder.
     */
    parent?: string;
}
