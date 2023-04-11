import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipInput } from "./membership";
/**
 * Request message for the `GkeHub.ValidateCreateMembership` method.
 */
export declare class ValidateCreateMembershipRequestInput extends SpeakeasyBase {
    /**
     * Membership contains information about a member cluster.
     */
    membership?: MembershipInput;
    /**
     * Required. Client chosen membership id.
     */
    membershipId?: string;
}
