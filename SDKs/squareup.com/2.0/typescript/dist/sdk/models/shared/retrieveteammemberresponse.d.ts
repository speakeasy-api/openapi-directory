import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TeamMember } from "./teammember";
/**
 * Represents a response from a retrieve request containing a `TeamMember` object or error messages.
 */
export declare class RetrieveTeamMemberResponse extends SpeakeasyBase {
    /**
     * The errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A record representing an individual team member for a business.
     */
    teamMember?: TeamMember;
}
