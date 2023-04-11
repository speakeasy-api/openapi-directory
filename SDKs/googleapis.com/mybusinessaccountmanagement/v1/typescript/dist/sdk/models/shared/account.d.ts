import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationInfo, OrganizationInfoInput } from "./organizationinfo";
/**
 * Output only. Specifies the permission level the user has for this account.
 */
export declare enum AccountPermissionLevelEnum {
    PermissionLevelUnspecified = "PERMISSION_LEVEL_UNSPECIFIED",
    OwnerLevel = "OWNER_LEVEL",
    MemberLevel = "MEMBER_LEVEL"
}
/**
 * Output only. Specifies the AccountRole of this account.
 */
export declare enum AccountRoleEnum {
    AccountRoleUnspecified = "ACCOUNT_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}
/**
 * Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API.
 */
export declare enum AccountTypeEnum {
    AccountTypeUnspecified = "ACCOUNT_TYPE_UNSPECIFIED",
    Personal = "PERSONAL",
    LocationGroup = "LOCATION_GROUP",
    UserGroup = "USER_GROUP",
    Organization = "ORGANIZATION"
}
/**
 * Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.
 */
export declare enum AccountVerificationStateEnum {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    VerificationRequested = "VERIFICATION_REQUESTED"
}
/**
 * Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method.
 */
export declare enum AccountVettedStateEnum {
    VettedStateUnspecified = "VETTED_STATE_UNSPECIFIED",
    NotVetted = "NOT_VETTED",
    Vetted = "VETTED",
    Invalid = "INVALID"
}
/**
 * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account.
     */
    accountName?: string;
    /**
     * Output only. Account reference number if provisioned.
     */
    accountNumber?: string;
    /**
     * Immutable. The resource name, in the format `accounts/{account_id}`.
     */
    name?: string;
    /**
     * Additional information stored for an organization.
     */
    organizationInfo?: OrganizationInfo;
    /**
     * Output only. Specifies the permission level the user has for this account.
     */
    permissionLevel?: AccountPermissionLevelEnum;
    /**
     * Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}`.
     */
    primaryOwner?: string;
    /**
     * Output only. Specifies the AccountRole of this account.
     */
    role?: AccountRoleEnum;
    /**
     * Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API.
     */
    type?: AccountTypeEnum;
    /**
     * Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.
     */
    verificationState?: AccountVerificationStateEnum;
    /**
     * Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method.
     */
    vettedState?: AccountVettedStateEnum;
}
/**
 * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
 */
export declare class AccountInput extends SpeakeasyBase {
    /**
     * Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account.
     */
    accountName?: string;
    /**
     * Immutable. The resource name, in the format `accounts/{account_id}`.
     */
    name?: string;
    /**
     * Additional information stored for an organization.
     */
    organizationInfo?: OrganizationInfoInput;
    /**
     * Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}`.
     */
    primaryOwner?: string;
    /**
     * Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API.
     */
    type?: AccountTypeEnum;
}
