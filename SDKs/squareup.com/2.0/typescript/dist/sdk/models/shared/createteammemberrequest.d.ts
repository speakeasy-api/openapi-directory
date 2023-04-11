import { SpeakeasyBase } from "../../../internal/utils";
import { TeamMember } from "./teammember";
/**
 * Represents a create request for a `TeamMember` object.
 */
export declare class CreateTeamMemberRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies this `CreateTeamMember` request.
     *
     * @remarks
     * Keys can be any valid string, but must be unique for every request.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency).
     *
     * The minimum length is 1 and the maximum length is 45.
     */
    idempotencyKey?: string;
    /**
     * A record representing an individual team member for a business.
     */
    teamMember?: TeamMember;
}
