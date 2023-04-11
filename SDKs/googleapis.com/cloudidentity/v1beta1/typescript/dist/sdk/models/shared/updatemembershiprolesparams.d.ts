import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipRoleInput } from "./membershiprole";
/**
 * The details of an update to a `MembershipRole`.
 */
export declare class UpdateMembershipRolesParamsInput extends SpeakeasyBase {
    /**
     * The fully-qualified names of fields to update. May only contain the field `expiry_detail.expire_time`.
     */
    fieldMask?: string;
    /**
     * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
     */
    membershipRole?: MembershipRoleInput;
}
