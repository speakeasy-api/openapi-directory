import { SpeakeasyBase } from "../../../internal/utils";
import { AccountState } from "./accountstate";
import { OrganizationInfo } from "./organizationinfo";
/**
 * Output only. Specifies the PermissionLevel the caller has for this account.
 */
export declare enum AccountPermissionLevelEnum {
    PermissionLevelUnspecified = "PERMISSION_LEVEL_UNSPECIFIED",
    OwnerLevel = "OWNER_LEVEL",
    MemberLevel = "MEMBER_LEVEL"
}
/**
 * Output only. Specifies the AccountRole the caller has for this account.
 */
export declare enum AccountRoleEnum {
    AccountRoleUnspecified = "ACCOUNT_ROLE_UNSPECIFIED",
    Owner = "OWNER",
    CoOwner = "CO_OWNER",
    Manager = "MANAGER",
    CommunityManager = "COMMUNITY_MANAGER"
}
/**
 * Output only. Specifies the AccountType of this account.
 */
export declare enum AccountTypeEnum {
    AccountTypeUnspecified = "ACCOUNT_TYPE_UNSPECIFIED",
    Personal = "PERSONAL",
    LocationGroup = "LOCATION_GROUP",
    UserGroup = "USER_GROUP",
    Organization = "ORGANIZATION"
}
/**
 * An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
 */
export declare class Account extends SpeakeasyBase {
    /**
     * The name of the account. *Note:* For an account with AccountType `PERSONAL`, this is the first and last name of the user account.
     */
    accountName?: string;
    /**
     * Account reference number if provisioned.
     */
    accountNumber?: string;
    /**
     * The resource name, in the format `accounts/{account_id}`.
     */
    name?: string;
    /**
     * Additional Info stored for an organization.
     */
    organizationInfo?: OrganizationInfo;
    /**
     * Output only. Specifies the PermissionLevel the caller has for this account.
     */
    permissionLevel?: AccountPermissionLevelEnum;
    /**
     * Output only. Specifies the AccountRole the caller has for this account.
     */
    role?: AccountRoleEnum;
    /**
     * Indicates status of the account, such as whether the account has been verified by Google.
     */
    state?: AccountState;
    /**
     * Output only. Specifies the AccountType of this account.
     */
    type?: AccountTypeEnum;
}
