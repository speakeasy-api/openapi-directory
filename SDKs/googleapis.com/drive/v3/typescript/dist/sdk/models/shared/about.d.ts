import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
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
/**
 * The user's storage quota limits and usage. All fields are measured in bytes.
 */
export declare class AboutStorageQuota extends SpeakeasyBase {
    /**
     * The usage limit, if applicable. This will not be present if the user has unlimited storage.
     */
    limit?: string;
    /**
     * The total usage across all services.
     */
    usage?: string;
    /**
     * The usage by all files in Google Drive.
     */
    usageInDrive?: string;
    /**
     * The usage by trashed files in Google Drive.
     */
    usageInDriveTrash?: string;
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
 * Information about the user, the user's Drive, and system capabilities.
 */
export declare class About extends SpeakeasyBase {
    /**
     * Whether the user has installed the requesting app.
     */
    appInstalled?: boolean;
    /**
     * Whether the user can create shared drives.
     */
    canCreateDrives?: boolean;
    /**
     * Deprecated - use canCreateDrives instead.
     */
    canCreateTeamDrives?: boolean;
    /**
     * A list of themes that are supported for shared drives.
     */
    driveThemes?: AboutDriveThemes[];
    /**
     * A map of source MIME type to possible targets for all supported exports.
     */
    exportFormats?: Record<string, string[]>;
    /**
     * The currently supported folder colors as RGB hex strings.
     */
    folderColorPalette?: string[];
    /**
     * A map of source MIME type to possible targets for all supported imports.
     */
    importFormats?: Record<string, string[]>;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#about".
     */
    kind?: string;
    /**
     * A map of maximum import sizes by MIME type, in bytes.
     */
    maxImportSizes?: Record<string, string>;
    /**
     * The maximum upload size in bytes.
     */
    maxUploadSize?: string;
    /**
     * The user's storage quota limits and usage. All fields are measured in bytes.
     */
    storageQuota?: AboutStorageQuota;
    /**
     * Deprecated - use driveThemes instead.
     */
    teamDriveThemes?: AboutTeamDriveThemes[];
    /**
     * Information about a Drive user.
     */
    user?: User;
}
