import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * The response message for MembershipsService.ModifyMembershipRoles.
 */
export declare class ModifyMembershipRolesResponse extends SpeakeasyBase {
    /**
     * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
     */
    membership?: Membership;
}
