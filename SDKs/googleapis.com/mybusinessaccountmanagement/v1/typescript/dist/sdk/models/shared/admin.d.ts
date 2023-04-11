import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Specifies the role that this admin uses with the specified Account or Location.
 */
export declare enum AdminRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}
/**
 * An administrator of an Account or a location.
 */
export declare class AdminInput extends SpeakeasyBase {
    /**
     * Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`.
     */
    account?: string;
    /**
     * Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation.
     */
    admin?: string;
    /**
     * Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.
     */
    name?: string;
    /**
     * Required. Specifies the role that this admin uses with the specified Account or Location.
     */
    role?: AdminRoleEnum;
}
/**
 * An administrator of an Account or a location.
 */
export declare class Admin extends SpeakeasyBase {
    /**
     * Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`.
     */
    account?: string;
    /**
     * Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation.
     */
    admin?: string;
    /**
     * Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.
     */
    name?: string;
    /**
     * Output only. Indicates whether this admin has a pending invitation for the specified resource.
     */
    pendingInvitation?: boolean;
    /**
     * Required. Specifies the role that this admin uses with the specified Account or Location.
     */
    role?: AdminRoleEnum;
}
