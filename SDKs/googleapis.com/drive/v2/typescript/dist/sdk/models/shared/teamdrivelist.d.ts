import { SpeakeasyBase } from "../../../internal/utils";
import { TeamDrive } from "./teamdrive";
/**
 * A list of Team Drives.
 */
export declare class TeamDriveList extends SpeakeasyBase {
    /**
     * The list of Team Drives.
     */
    items?: TeamDrive[];
    /**
     * This is always drive#teamDriveList
     */
    kind?: string;
    /**
     * The page token for the next page of Team Drives.
     */
    nextPageToken?: string;
}
