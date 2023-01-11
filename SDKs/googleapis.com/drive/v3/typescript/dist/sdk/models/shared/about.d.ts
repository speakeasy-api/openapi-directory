import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class AboutDriveThemes extends SpeakeasyBase {
    backgroundImageLink?: string;
    colorRgb?: string;
    id?: string;
}
/**
 * The user's storage quota limits and usage. All fields are measured in bytes.
**/
export declare class AboutStorageQuota extends SpeakeasyBase {
    limit?: string;
    usage?: string;
    usageInDrive?: string;
    usageInDriveTrash?: string;
}
export declare class AboutTeamDriveThemes extends SpeakeasyBase {
    backgroundImageLink?: string;
    colorRgb?: string;
    id?: string;
}
/**
 * Information about the user, the user's Drive, and system capabilities.
**/
export declare class About extends SpeakeasyBase {
    appInstalled?: boolean;
    canCreateDrives?: boolean;
    canCreateTeamDrives?: boolean;
    driveThemes?: AboutDriveThemes[];
    exportFormats?: Record<string, string[]>;
    folderColorPalette?: string[];
    importFormats?: Record<string, string[]>;
    kind?: string;
    maxImportSizes?: Record<string, string>;
    maxUploadSize?: string;
    storageQuota?: AboutStorageQuota;
    teamDriveThemes?: AboutTeamDriveThemes[];
    user?: User;
}
