import { SpeakeasyBase } from "../../../internal/utils";
import { WLTRecord } from "./wltrecord";
/**
 * The highest playoff level the team reached.
 */
export declare enum TeamEventStatusPlayoffLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}
/**
 * Current competition status for the playoffs.
 */
export declare enum TeamEventStatusPlayoffStatusEnum {
    Won = "won",
    Eliminated = "eliminated",
    Playing = "playing"
}
/**
 * Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
 */
export declare class TeamEventStatusPlayoff extends SpeakeasyBase {
    /**
     * A Win-Loss-Tie record for a team, or an alliance.
     */
    currentLevelRecord?: WLTRecord;
    /**
     * The highest playoff level the team reached.
     */
    level?: TeamEventStatusPlayoffLevelEnum;
    /**
     * The average match score during playoffs. Year specific. May be null if not relevant for a given year.
     */
    playoffAverage?: number;
    /**
     * A Win-Loss-Tie record for a team, or an alliance.
     */
    record?: WLTRecord;
    /**
     * Current competition status for the playoffs.
     */
    status?: TeamEventStatusPlayoffStatusEnum;
}
