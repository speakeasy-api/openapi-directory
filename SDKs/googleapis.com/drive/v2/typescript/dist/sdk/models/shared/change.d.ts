import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { File } from "./file";
import { TeamDrive } from "./teamdrive";
/**
 * Representation of a change to a file or shared drive.
 */
export declare class Change extends SpeakeasyBase {
    /**
     * The type of the change. Possible values are file and drive.
     */
    changeType?: string;
    /**
     * Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
     */
    deleted?: boolean;
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
     * The ID of the file associated with this change.
     */
    fileId?: string;
    /**
     * The ID of the change.
     */
    id?: string;
    /**
     * This is always drive#change.
     */
    kind?: string;
    /**
     * The time of this modification.
     */
    modificationDate?: Date;
    /**
     * A link back to this change.
     */
    selfLink?: string;
    /**
     * Deprecated: use the drive collection instead.
     */
    teamDrive?: TeamDrive;
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string;
    /**
     * Deprecated - use changeType instead.
     */
    type?: string;
}
