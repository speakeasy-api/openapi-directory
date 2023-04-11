import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFile } from "./drivefile";
/**
 * Mechanism by which students access the Drive item.
 */
export declare enum SharedDriveFileShareModeEnum {
    UnknownShareMode = "UNKNOWN_SHARE_MODE",
    View = "VIEW",
    Edit = "EDIT",
    StudentCopy = "STUDENT_COPY"
}
/**
 * Drive file that is used as material for course work.
 */
export declare class SharedDriveFile extends SpeakeasyBase {
    /**
     * Representation of a Google Drive file.
     */
    driveFile?: DriveFile;
    /**
     * Mechanism by which students access the Drive item.
     */
    shareMode?: SharedDriveFileShareModeEnum;
}
