import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateTeamMemberRequest } from "./updateteammemberrequest";
/**
 * Represents a bulk update request for `TeamMember` objects.
 */
export declare class BulkUpdateTeamMembersRequest extends SpeakeasyBase {
    /**
     * The data used to update the `TeamMember` objects. Each key is the `team_member_id` that maps to the `UpdateTeamMemberRequest`.
     */
    teamMembers: Record<string, UpdateTeamMemberRequest>;
}
