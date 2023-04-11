import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the AdminRole that this admin uses with the specified Account or Location resource.
 */
export declare enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}
/**
 * An administrator of an Account or a Location.
 */
export declare class Admin extends SpeakeasyBase {
    /**
     * The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names.
     */
    adminName?: string;
    /**
     * The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `accounts/{account_id}/locations/{location_id}/admins/{admin_id}`
     */
    name?: string;
    /**
     * Output only. Indicates whether this admin has a pending invitation for the specified resource.
     */
    pendingInvitation?: boolean;
    /**
     * Specifies the AdminRole that this admin uses with the specified Account or Location resource.
     */
    role?: AdminRoleEnum;
}
