import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";
/**
 * The invited role on the account.
 */
export declare enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}
/**
 * Output only. Represents a pending invitation.
 */
export declare class Invitation extends SpeakeasyBase {
    /**
     * The resource name for the invitation.
     */
    name?: string;
    /**
     * The invited role on the account.
     */
    role?: InvitationRoleEnum;
    /**
     * An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
     */
    targetAccount?: Account;
    /**
     * Represents a target location for a pending invitation.
     */
    targetLocation?: TargetLocation;
}
