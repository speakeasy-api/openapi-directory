import { SpeakeasyBase } from "../../../internal/utils";
import { TeamEventStatusAlliance } from "./teameventstatusalliance";
import { TeamEventStatusPlayoff } from "./teameventstatusplayoff";
import { TeamEventStatusRank } from "./teameventstatusrank";
/**
 * Successful response
 */
export declare class TeamEventStatus extends SpeakeasyBase {
    alliance?: TeamEventStatusAlliance;
    /**
     * An HTML formatted string suitable for display to the user containing the team's alliance pick status.
     */
    allianceStatusStr?: string;
    /**
     * TBA match key for the last match the team played in at this event, or null.
     */
    lastMatchKey?: string;
    /**
     * TBA match key for the next match the team is scheduled to play in at this event, or null.
     */
    nextMatchKey?: string;
    /**
     * An HTML formatted string suitable for display to the user containing the team's overall status summary of the event.
     */
    overallStatusStr?: string;
    /**
     * Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
     */
    playoff?: TeamEventStatusPlayoff;
    /**
     * An HTML formatter string suitable for display to the user containing the team's playoff status.
     */
    playoffStatusStr?: string;
    qual?: TeamEventStatusRank;
}
