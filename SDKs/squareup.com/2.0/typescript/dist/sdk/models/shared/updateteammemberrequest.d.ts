import { SpeakeasyBase } from "../../../internal/utils";
import { TeamMember } from "./teammember";
/**
 * Represents an update request for a `TeamMember` object.
 */
export declare class UpdateTeamMemberRequest extends SpeakeasyBase {
    /**
     * A record representing an individual team member for a business.
     */
    teamMember?: TeamMember;
}
