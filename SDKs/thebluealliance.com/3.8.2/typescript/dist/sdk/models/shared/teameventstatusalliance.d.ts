import { SpeakeasyBase } from "../../../internal/utils";
import { TeamEventStatusAllianceBackup } from "./teameventstatusalliancebackup";
export declare class TeamEventStatusAlliance extends SpeakeasyBase {
    /**
     * Backup status, may be null.
     */
    backup?: TeamEventStatusAllianceBackup;
    /**
     * Alliance name, may be null.
     */
    name?: string;
    /**
     * Alliance number.
     */
    number: number;
    /**
     * Order the team was picked in the alliance from 0-2, with 0 being alliance captain.
     */
    pick: number;
}
