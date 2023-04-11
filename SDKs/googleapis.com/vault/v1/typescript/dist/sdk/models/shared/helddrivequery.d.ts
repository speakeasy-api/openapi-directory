import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for Drive holds.
 */
export declare class HeldDriveQuery extends SpeakeasyBase {
    /**
     * To include files in shared drives in the hold, set to **true**.
     */
    includeSharedDriveFiles?: boolean;
    /**
     * To include files in Team Drives in the hold, set to **true**.
     */
    includeTeamDriveFiles?: boolean;
}
