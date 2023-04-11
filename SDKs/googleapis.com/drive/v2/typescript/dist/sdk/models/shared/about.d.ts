import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class AboutAdditionalRoleInfoRoleSets extends SpeakeasyBase {
    /**
     * The supported additional roles with the primary role.
     */
    additionalRoles?: string[];
    /**
     * A primary permission role.
     */
    primaryRole?: string;
}
export declare class AboutAdditionalRoleInfo extends SpeakeasyBase {
    /**
     * The supported additional roles per primary role.
     */
    roleSets?: AboutAdditionalRoleInfoRoleSets[];
    /**
     * The content type that this additional role info applies to.
     */
    type?: string;
}
export declare class AboutDriveThemes extends SpeakeasyBase {
    /**
     * A link to this theme's background image.
     */
    backgroundImageLink?: string;
    /**
     * The color of this theme as an RGB hex string.
     */
    colorRgb?: string;
    /**
     * The ID of the theme.
     */
    id?: string;
}
export declare class AboutExportFormats extends SpeakeasyBase {
    /**
     * The content type to convert from.
     */
    source?: string;
    /**
     * The possible content types to convert to.
     */
    targets?: string[];
}
export declare class AboutFeatures extends SpeakeasyBase {
    /**
     * The name of the feature.
     */
    featureName?: string;
    /**
     * The request limit rate for this feature, in queries per second.
     */
    featureRate?: number;
}
export declare class AboutImportFormats extends SpeakeasyBase {
    /**
     * The imported file's content type to convert from.
     */
    source?: string;
    /**
     * The possible content types to convert to.
     */
    targets?: string[];
}
export declare class AboutMaxUploadSizes extends SpeakeasyBase {
    /**
     * The max upload size for this type.
     */
    size?: string;
    /**
     * The file type.
     */
    type?: string;
}
export declare class AboutQuotaBytesByService extends SpeakeasyBase {
    /**
     * The storage quota bytes used by the service.
     */
    bytesUsed?: string;
    /**
     * The service's name, e.g. DRIVE, GMAIL, or PHOTOS.
     */
    serviceName?: string;
}
export declare class AboutTeamDriveThemes extends SpeakeasyBase {
    /**
     * Deprecated - use driveThemes/backgroundImageLink instead.
     */
    backgroundImageLink?: string;
    /**
     * Deprecated - use driveThemes/colorRgb instead.
     */
    colorRgb?: string;
    /**
     * Deprecated - use driveThemes/id instead.
     */
    id?: string;
}
/**
 * An item with user information and settings.
 */
export declare class About extends SpeakeasyBase {
    /**
     * Information about supported additional roles per file type. The most specific type takes precedence.
     */
    additionalRoleInfo?: AboutAdditionalRoleInfo[];
    /**
     * Whether the user can create shared drives.
     */
    canCreateDrives?: boolean;
    /**
     * Deprecated - use canCreateDrives instead.
     */
    canCreateTeamDrives?: boolean;
    /**
     * The domain sharing policy for the current user. Possible values are:
     *
     * @remarks
     * - allowed
     * - allowedWithWarning
     * - incomingOnly
     * - disallowed
     */
    domainSharingPolicy?: string;
    /**
     * A list of themes that are supported for shared drives.
     */
    driveThemes?: AboutDriveThemes[];
    /**
     * The ETag of the item.
     */
    etag?: string;
    /**
     * The allowable export formats.
     */
    exportFormats?: AboutExportFormats[];
    /**
     * List of additional features enabled on this account.
     */
    features?: AboutFeatures[];
    /**
     * The palette of allowable folder colors as RGB hex strings.
     */
    folderColorPalette?: string[];
    /**
     * The allowable import formats.
     */
    importFormats?: AboutImportFormats[];
    /**
     * A boolean indicating whether the authenticated app is installed by the authenticated user.
     */
    isCurrentAppInstalled?: boolean;
    /**
     * This is always drive#about.
     */
    kind?: string;
    /**
     * The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     */
    languageCode?: string;
    /**
     * The largest change id.
     */
    largestChangeId?: string;
    /**
     * List of max upload sizes for each file type. The most specific type takes precedence.
     */
    maxUploadSizes?: AboutMaxUploadSizes[];
    /**
     * The name of the current user.
     */
    name?: string;
    /**
     * The current user's ID as visible in the permissions collection.
     */
    permissionId?: string;
    /**
     * The amount of storage quota used by different Google services.
     */
    quotaBytesByService?: AboutQuotaBytesByService[];
    /**
     * The total number of quota bytes. This is only relevant when quotaType is LIMITED.
     */
    quotaBytesTotal?: string;
    /**
     * The number of quota bytes used by Google Drive.
     */
    quotaBytesUsed?: string;
    /**
     * The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
     */
    quotaBytesUsedAggregate?: string;
    /**
     * The number of quota bytes used by trashed items.
     */
    quotaBytesUsedInTrash?: string;
    /**
     * The type of the user's storage quota. Possible values are:
     *
     * @remarks
     * - LIMITED
     * - UNLIMITED
     */
    quotaType?: string;
    /**
     * The number of remaining change ids, limited to no more than 2500.
     */
    remainingChangeIds?: string;
    /**
     * The id of the root folder.
     */
    rootFolderId?: string;
    /**
     * A link back to this item.
     */
    selfLink?: string;
    /**
     * Deprecated - use driveThemes instead.
     */
    teamDriveThemes?: AboutTeamDriveThemes[];
    /**
     * Information about a Drive user.
     */
    user?: User;
}
