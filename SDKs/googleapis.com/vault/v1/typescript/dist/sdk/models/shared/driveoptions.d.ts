import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive.
 */
export declare enum DriveOptionsClientSideEncryptedOptionEnum {
    ClientSideEncryptedOptionUnspecified = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
    ClientSideEncryptedOptionAny = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY",
    ClientSideEncryptedOptionEncrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED",
    ClientSideEncryptedOptionUnencrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"
}
/**
 * Additional options for Drive search
 */
export declare class DriveOptions extends SpeakeasyBase {
    /**
     * Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive.
     */
    clientSideEncryptedOption?: DriveOptionsClientSideEncryptedOptionEnum;
    /**
     * Set to **true** to include shared drives.
     */
    includeSharedDrives?: boolean;
    /**
     * Set to true to include Team Drive.
     */
    includeTeamDrives?: boolean;
    /**
     * Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.
     */
    versionDate?: string;
}
