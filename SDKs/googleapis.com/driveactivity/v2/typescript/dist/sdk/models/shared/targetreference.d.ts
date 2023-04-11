import { SpeakeasyBase } from "../../../internal/utils";
import { DriveItemReference } from "./driveitemreference";
import { DriveReference } from "./drivereference";
import { TeamDriveReference } from "./teamdrivereference";
/**
 * A lightweight reference to the target of activity.
 */
export declare class TargetReference extends SpeakeasyBase {
    /**
     * A lightweight reference to a shared drive.
     */
    drive?: DriveReference;
    /**
     * A lightweight reference to a Drive item, such as a file or folder.
     */
    driveItem?: DriveItemReference;
    /**
     * This item is deprecated; please see `DriveReference` instead.
     */
    teamDrive?: TeamDriveReference;
}
