import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.
 */
export declare enum UserAccountTypeEnum {
    DeviceAccount = "deviceAccount",
    UserAccount = "userAccount"
}
/**
 * The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.
 */
export declare enum UserManagementTypeEnum {
    GoogleManaged = "googleManaged",
    EmmManaged = "emmManaged"
}
/**
 * A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play.
 */
export declare class User extends SpeakeasyBase {
    /**
     * A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.
     */
    accountIdentifier?: string;
    /**
     * The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.
     */
    accountType?: UserAccountTypeEnum;
    /**
     * The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. @mutable androidenterprise.users.update
     */
    displayName?: string;
    /**
     * The unique ID for the user.
     */
    id?: string;
    /**
     * The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.
     */
    managementType?: UserManagementTypeEnum;
    /**
     * The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.
     */
    primaryEmail?: string;
}
