import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TeamMemberBookingProfile } from "./teammemberbookingprofile";
/**
 * Success
 */
export declare class RetrieveTeamMemberBookingProfileResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The booking profile of a seller's team member, including the team member's ID, display name, description and whether the team member can be booked as a service provider.
     */
    teamMemberBookingProfile?: TeamMemberBookingProfile;
}
