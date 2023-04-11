import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";
/**
 * Output only. The invited role on the account.
 */
export declare enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}
/**
 * Output only. Specifies which target types should appear in the response.
 */
export declare enum InvitationTargetTypeEnum {
    TargetTypeUnspecified = "TARGET_TYPE_UNSPECIFIED",
    AccountsOnly = "ACCOUNTS_ONLY",
    LocationsOnly = "LOCATIONS_ONLY"
}
/**
 * Represents a pending invitation.
 */
export declare class Invitation extends SpeakeasyBase {
    /**
     * Required. The resource name for the invitation. `accounts/{account_id}/invitations/{invitation_id}`.
     */
    name?: string;
    /**
     * Output only. The invited role on the account.
     */
    role?: InvitationRoleEnum;
    /**
     * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
     */
    targetAccount?: Account;
    /**
     * Represents a target location for a pending invitation.
     */
    targetLocation?: TargetLocation;
    /**
     * Output only. Specifies which target types should appear in the response.
     */
    targetType?: InvitationTargetTypeEnum;
}
