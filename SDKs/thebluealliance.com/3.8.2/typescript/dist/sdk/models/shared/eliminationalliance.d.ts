import { SpeakeasyBase } from "../../../internal/utils";
import { WLTRecord } from "./wltrecord";
/**
 * Backup team called in, may be null.
 */
export declare class EliminationAllianceBackup extends SpeakeasyBase {
    /**
     * Team key that was called in as the backup.
     */
    in?: string;
    /**
     * Team key that was replaced by the backup team.
     */
    out?: string;
}
export declare class EliminationAllianceStatus extends SpeakeasyBase {
    /**
     * A Win-Loss-Tie record for a team, or an alliance.
     */
    currentLevelRecord?: WLTRecord;
    level?: string;
    playoffAverage?: number;
    /**
     * A Win-Loss-Tie record for a team, or an alliance.
     */
    record?: WLTRecord;
    status?: string;
}
export declare class EliminationAlliance extends SpeakeasyBase {
    /**
     * Backup team called in, may be null.
     */
    backup?: EliminationAllianceBackup;
    /**
     * List of teams that declined the alliance.
     */
    declines?: string[];
    /**
     * Alliance name, may be null.
     */
    name?: string;
    /**
     * List of team keys picked for the alliance. First pick is captain.
     */
    picks: string[];
    status?: EliminationAllianceStatus;
}
