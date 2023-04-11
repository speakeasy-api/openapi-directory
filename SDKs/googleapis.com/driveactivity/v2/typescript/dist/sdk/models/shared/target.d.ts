import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { DriveItem } from "./driveitem";
import { FileComment } from "./filecomment";
import { TeamDrive } from "./teamdrive";
/**
 * Information about the target of activity. For more information on how activity history is shared with users, see [Activity history visibility](https://developers.google.com/drive/activity/v2#activityhistory).
 */
export declare class Target extends SpeakeasyBase {
    /**
     * Information about a shared drive.
     */
    drive?: Drive;
    /**
     * A Drive item, such as a file or folder.
     */
    driveItem?: DriveItem;
    /**
     * A comment on a file.
     */
    fileComment?: FileComment;
    /**
     * This item is deprecated; please see `Drive` instead.
     */
    teamDrive?: TeamDrive;
}
