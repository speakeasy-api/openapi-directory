import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The permission level of the user
 */
export declare enum SubUserDataPermissionLevelEnum {
    SelectedFolderAndSubfoldersMeters = "SelectedFolderAndSubfoldersMeters",
    SelectedFolderOnly = "SelectedFolderOnly"
}
/**
 * Container data for the sub user
 */
export declare class SubUserData extends SpeakeasyBase {
    /**
     * The end date. until this date the user has access
     */
    accessEndDate?: Date;
    /**
     * The start date. From this date the user has access
     */
    accessTimeStartDate?: Date;
    /**
     * The Email adress
     */
    email?: string;
    /**
     * The ID of the user
     */
    id?: string;
    /**
     * If set this is used a new password
     */
    newPassword?: string;
    /**
     * The permission level of the user
     */
    permissionLevel?: SubUserDataPermissionLevelEnum;
    /**
     * The username
     */
    username?: string;
}
