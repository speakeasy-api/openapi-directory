import { SpeakeasyBase } from "../../../internal/utils";
import { UserName } from "./username";
/**
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
 */
export declare class UserInput extends SpeakeasyBase {
    /**
     * The list of the user's addresses. The maximum allowed data size for this field is 10KB.
     */
    addresses?: any;
    /**
     * Indicates if user is archived.
     */
    archived?: boolean;
    /**
     * Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).
     */
    changePasswordAtNextLogin?: boolean;
    /**
     * Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.
     */
    customSchemas?: Record<string, Record<string, any>>;
    /**
     * The list of the user's email addresses. The maximum allowed data size for this field is 10KB.
     */
    emails?: any;
    /**
     * The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.
     */
    externalIds?: any;
    /**
     * The user's gender. The maximum allowed data size for this field is 1KB.
     */
    gender?: any;
    /**
     * Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.
     */
    hashFunction?: string;
    /**
     * The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.
     */
    id?: string;
    /**
     * The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.
     */
    ims?: any;
    /**
     * Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).
     */
    includeInGlobalAddressList?: boolean;
    /**
     * If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.
     */
    ipWhitelisted?: boolean;
    /**
     * The list of the user's keywords. The maximum allowed data size for this field is 1KB.
     */
    keywords?: any;
    /**
     * The user's languages. The maximum allowed data size for this field is 1KB.
     */
    languages?: any;
    /**
     * The user's locations. The maximum allowed data size for this field is 10KB.
     */
    locations?: any;
    name?: UserName;
    /**
     * Notes for the user.
     */
    notes?: any;
    /**
     * The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).
     */
    orgUnitPath?: string;
    /**
     * The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.
     */
    organizations?: any;
    /**
     * User's password
     */
    password?: string;
    /**
     * The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.
     */
    phones?: any;
    /**
     * The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.
     */
    posixAccounts?: any;
    /**
     * The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.
     */
    primaryEmail?: string;
    /**
     * Recovery email of the user.
     */
    recoveryEmail?: string;
    /**
     * Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.
     */
    recoveryPhone?: string;
    /**
     * The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.
     */
    relations?: any;
    /**
     * A list of SSH public keys.
     */
    sshPublicKeys?: any;
    /**
     * Indicates if user is suspended.
     */
    suspended?: boolean;
    /**
     * The user's websites. The maximum allowed data size for this field is 2KB.
     */
    websites?: any;
}
/**
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
 */
export declare class User extends SpeakeasyBase {
    /**
     * The list of the user's addresses. The maximum allowed data size for this field is 10KB.
     */
    addresses?: any;
    /**
     * Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement.
     */
    agreedToTerms?: boolean;
    /**
     * Output only. The list of the user's alias email addresses.
     */
    aliases?: string[];
    /**
     * Indicates if user is archived.
     */
    archived?: boolean;
    /**
     * Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).
     */
    changePasswordAtNextLogin?: boolean;
    /**
     * User's G Suite account creation time. (Read-only)
     */
    creationTime?: Date;
    /**
     * Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.
     */
    customSchemas?: Record<string, Record<string, any>>;
    /**
     * Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request.
     */
    customerId?: string;
    deletionTime?: Date;
    /**
     * The list of the user's email addresses. The maximum allowed data size for this field is 10KB.
     */
    emails?: any;
    /**
     * Output only. ETag of the resource.
     */
    etag?: string;
    /**
     * The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.
     */
    externalIds?: any;
    /**
     * The user's gender. The maximum allowed data size for this field is 1KB.
     */
    gender?: any;
    /**
     * Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.
     */
    hashFunction?: string;
    /**
     * The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.
     */
    id?: string;
    /**
     * The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.
     */
    ims?: any;
    /**
     * Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).
     */
    includeInGlobalAddressList?: boolean;
    /**
     * If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.
     */
    ipWhitelisted?: boolean;
    /**
     * Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.
     */
    isAdmin?: boolean;
    /**
     * Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325).
     */
    isDelegatedAdmin?: boolean;
    /**
     * Output only. Is 2-step verification enforced (Read-only)
     */
    isEnforcedIn2Sv?: boolean;
    /**
     * Output only. Is enrolled in 2-step verification (Read-only)
     */
    isEnrolledIn2Sv?: boolean;
    /**
     * Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.
     */
    isMailboxSetup?: boolean;
    /**
     * The list of the user's keywords. The maximum allowed data size for this field is 1KB.
     */
    keywords?: any;
    /**
     * Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`.
     */
    kind?: string;
    /**
     * The user's languages. The maximum allowed data size for this field is 1KB.
     */
    languages?: any;
    /**
     * User's last login time. (Read-only)
     */
    lastLoginTime?: Date;
    /**
     * The user's locations. The maximum allowed data size for this field is 10KB.
     */
    locations?: any;
    name?: UserName;
    /**
     * Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.
     */
    nonEditableAliases?: string[];
    /**
     * Notes for the user.
     */
    notes?: any;
    /**
     * The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).
     */
    orgUnitPath?: string;
    /**
     * The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.
     */
    organizations?: any;
    /**
     * User's password
     */
    password?: string;
    /**
     * The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.
     */
    phones?: any;
    /**
     * The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.
     */
    posixAccounts?: any;
    /**
     * The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.
     */
    primaryEmail?: string;
    /**
     * Recovery email of the user.
     */
    recoveryEmail?: string;
    /**
     * Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.
     */
    recoveryPhone?: string;
    /**
     * The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.
     */
    relations?: any;
    /**
     * A list of SSH public keys.
     */
    sshPublicKeys?: any;
    /**
     * Indicates if user is suspended.
     */
    suspended?: boolean;
    /**
     * Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.
     */
    suspensionReason?: string;
    /**
     * Output only. ETag of the user's photo (Read-only)
     */
    thumbnailPhotoEtag?: string;
    /**
     * Output only. The URL of the user's profile photo. The URL might be temporary or private.
     */
    thumbnailPhotoUrl?: string;
    /**
     * The user's websites. The maximum allowed data size for this field is 2KB.
     */
    websites?: any;
}
