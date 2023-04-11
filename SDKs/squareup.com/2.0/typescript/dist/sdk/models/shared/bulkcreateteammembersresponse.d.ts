import { SpeakeasyBase } from "../../../internal/utils";
import { CreateTeamMemberResponse } from "./createteammemberresponse";
import { ErrorT } from "./error";
/**
 * Represents a response from a bulk create request containing the created `TeamMember` objects or error messages.
 */
export declare class BulkCreateTeamMembersResponse extends SpeakeasyBase {
    /**
     * The errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The successfully created `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`.
     */
    teamMembers?: Record<string, CreateTeamMemberResponse>;
}
