import { SpeakeasyBase } from "../../../internal/utils";
import { CreateTeamMemberRequest } from "./createteammemberrequest";
/**
 * Represents a bulk create request for `TeamMember` objects.
 */
export declare class BulkCreateTeamMembersRequest extends SpeakeasyBase {
    /**
     * The data used to create the `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`.
     */
    teamMembers: Record<string, CreateTeamMemberRequest>;
}
