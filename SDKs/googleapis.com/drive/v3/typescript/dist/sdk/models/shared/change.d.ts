import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { File } from "./file";
import { TeamDrive } from "./teamdrive";
/**
 * A change to a file or shared drive.
 */
export declare class Change extends SpeakeasyBase {
    /**
     * The type of the change. Possible values are file and drive.
     */
    changeType?: string;
    /**
     * Representation of a shared drive.
     */
    drive?: Drive;
    /**
     * The ID of the shared drive associated with this change.
     */
    driveId?: string;
    /**
     * The metadata for a file.
     */
    file?: File;
    /**
     * The ID of the file which has changed.
     */
    fileId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#change".
     */
    kind?: string;
    /**
     * Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
     */
    removed?: boolean;
    /**
     * Deprecated: use the drive collection instead.
     */
    teamDrive?: TeamDrive;
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string;
    /**
     * The time of this change (RFC 3339 date-time).
     */
    time?: Date;
    /**
     * Deprecated - use changeType instead.
     */
    type?: string;
}
