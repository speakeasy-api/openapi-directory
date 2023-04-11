import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipRoleInput } from "./membershiprole";
import { UpdateMembershipRolesParamsInput } from "./updatemembershiprolesparams";
/**
 * The request message for MembershipsService.ModifyMembershipRoles.
 */
export declare class ModifyMembershipRolesRequestInput extends SpeakeasyBase {
    /**
     * The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set.
     */
    addRoles?: MembershipRoleInput[];
    /**
     * The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.
     */
    removeRoles?: string[];
    /**
     * The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set.
     */
    updateRolesParams?: UpdateMembershipRolesParamsInput[];
}
