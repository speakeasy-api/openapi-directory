import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { UpdateTeamMemberResponse } from "./updateteammemberresponse";
/**
 * Represents a response from a bulk update request containing the updated `TeamMember` objects or error messages.
 */
export declare class BulkUpdateTeamMembersResponse extends SpeakeasyBase {
    /**
     * The errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The successfully updated `TeamMember` objects. Each key is the `team_member_id` that maps to the `UpdateTeamMemberRequest`.
     */
    teamMembers?: Record<string, UpdateTeamMemberResponse>;
}
