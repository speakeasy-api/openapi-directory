import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
 */
export declare class TeamDriveBackgroundImageFile extends SpeakeasyBase {
    /**
     * The ID of an image file in Drive to use for the background image.
     */
    id?: string;
    /**
     * The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.
     */
    width?: number;
    /**
     * The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.
     */
    xCoordinate?: number;
    /**
     * The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
     */
    yCoordinate?: number;
}
/**
 * Capabilities the current user has on this Team Drive.
 */
export declare class TeamDriveCapabilities extends SpeakeasyBase {
    /**
     * Whether the current user can add children to folders in this Team Drive.
     */
    canAddChildren?: boolean;
    /**
     * Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive.
     */
    canChangeCopyRequiresWriterPermissionRestriction?: boolean;
    /**
     * Whether the current user can change the domainUsersOnly restriction of this Team Drive.
     */
    canChangeDomainUsersOnlyRestriction?: boolean;
    /**
     * Whether the current user can change the sharingFoldersRequiresOrganizerPermission restriction of this Team Drive.
     */
    canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
    /**
     * Whether the current user can change the background of this Team Drive.
     */
    canChangeTeamDriveBackground?: boolean;
    /**
     * Whether the current user can change the teamMembersOnly restriction of this Team Drive.
     */
    canChangeTeamMembersOnlyRestriction?: boolean;
    /**
     * Whether the current user can comment on files in this Team Drive.
     */
    canComment?: boolean;
    /**
     * Whether the current user can copy files in this Team Drive.
     */
    canCopy?: boolean;
    /**
     * Whether the current user can delete children from folders in this Team Drive.
     */
    canDeleteChildren?: boolean;
    /**
     * Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.
     */
    canDeleteTeamDrive?: boolean;
    /**
     * Whether the current user can download files in this Team Drive.
     */
    canDownload?: boolean;
    /**
     * Whether the current user can edit files in this Team Drive
     */
    canEdit?: boolean;
    /**
     * Whether the current user can list the children of folders in this Team Drive.
     */
    canListChildren?: boolean;
    /**
     * Whether the current user can add members to this Team Drive or remove them or change their role.
     */
    canManageMembers?: boolean;
    /**
     * Whether the current user can read the revisions resource of files in this Team Drive.
     */
    canReadRevisions?: boolean;
    /**
     * Deprecated - use canDeleteChildren or canTrashChildren instead.
     */
    canRemoveChildren?: boolean;
    /**
     * Whether the current user can rename files or folders in this Team Drive.
     */
    canRename?: boolean;
    /**
     * Whether the current user can rename this Team Drive.
     */
    canRenameTeamDrive?: boolean;
    /**
     * Whether the current user can reset the Team Drive restrictions to defaults.
     */
    canResetTeamDriveRestrictions?: boolean;
    /**
     * Whether the current user can share files or folders in this Team Drive.
     */
    canShare?: boolean;
    /**
     * Whether the current user can trash children from folders in this Team Drive.
     */
    canTrashChildren?: boolean;
}
/**
 * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
 */
export declare class TeamDriveRestrictions extends SpeakeasyBase {
    /**
     * Whether administrative privileges on this Team Drive are required to modify restrictions.
     */
    adminManagedRestrictions?: boolean;
    /**
     * Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this Team Drive.
     */
    copyRequiresWriterPermission?: boolean;
    /**
     * Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive.
     */
    domainUsersOnly?: boolean;
    /**
     * If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.
     */
    sharingFoldersRequiresOrganizerPermission?: boolean;
    /**
     * Whether access to items inside this Team Drive is restricted to members of this Team Drive.
     */
    teamMembersOnly?: boolean;
}
/**
 * Deprecated: use the drive collection instead.
 */
export declare class TeamDrive extends SpeakeasyBase {
    /**
     * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
     */
    backgroundImageFile?: TeamDriveBackgroundImageFile;
    /**
     * A short-lived link to this Team Drive's background image.
     */
    backgroundImageLink?: string;
    /**
     * Capabilities the current user has on this Team Drive.
     */
    capabilities?: TeamDriveCapabilities;
    /**
     * The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
     */
    colorRgb?: string;
    /**
     * The time at which the Team Drive was created (RFC 3339 date-time).
     */
    createdDate?: Date;
    /**
     * The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
     */
    id?: string;
    /**
     * This is always drive#teamDrive
     */
    kind?: string;
    /**
     * The name of this Team Drive.
     */
    name?: string;
    /**
     * The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is set to true.
     */
    orgUnitId?: string;
    /**
     * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
     */
    restrictions?: TeamDriveRestrictions;
    /**
     * The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.insert request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.
     */
    themeId?: string;
}
