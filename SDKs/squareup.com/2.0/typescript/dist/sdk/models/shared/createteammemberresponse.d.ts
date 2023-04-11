import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TeamMember } from "./teammember";
/**
 * Represents a response from a create request containing the created `TeamMember` object or error messages.
 */
export declare class CreateTeamMemberResponse extends SpeakeasyBase {
    /**
     * The errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A record representing an individual team member for a business.
     */
    teamMember?: TeamMember;
}
