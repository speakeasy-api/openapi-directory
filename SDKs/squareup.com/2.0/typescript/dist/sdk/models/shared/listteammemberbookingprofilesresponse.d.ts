import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TeamMemberBookingProfile } from "./teammemberbookingprofile";
/**
 * Success
 */
export declare class ListTeamMemberBookingProfilesResponse extends SpeakeasyBase {
    /**
     * The cursor for paginating through the results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The list of team member booking profiles.
     */
    teamMemberBookingProfiles?: TeamMemberBookingProfile[];
}
