/**
 * The type of the audit event.
 */
export declare enum EventTypesEnum {
    UserStatus = "USER_STATUS",
    UserUpdate = "USER_UPDATE",
    UserBillingUpdate = "USER_BILLING_UPDATE",
    UserCreate = "USER_CREATE",
    UserLogin = "USER_LOGIN",
    UserLogout = "USER_LOGOUT",
    UserProductSearch = "USER_PRODUCT_SEARCH",
    UserApiKeysUpdate = "USER_API_KEYS_UPDATE",
    AccountSecretDelete = "ACCOUNT_SECRET_DELETE",
    AccountSecretCreate = "ACCOUNT_SECRET_CREATE",
    AccountUpdateSpammer = "ACCOUNT_UPDATE_SPAMMER",
    AccountUpdateSettingsApi = "ACCOUNT_UPDATE_SETTINGS_API",
    NumberAssign = "NUMBER_ASSIGN",
    NumberUpdated = "NUMBER_UPDATED",
    NumberRelease = "NUMBER_RELEASE",
    NumberLinked = "NUMBER_LINKED",
    NumberUnlinked = "NUMBER_UNLINKED",
    AppCreate = "APP_CREATE",
    AppUpdate = "APP_UPDATE",
    AppDelete = "APP_DELETE",
    AppDisable = "APP_DISABLE",
    AppEnable = "APP_ENABLE",
    IpWhitelistCreate = "IP_WHITELIST_CREATE",
    IpWhitelistDelete = "IP_WHITELIST_DELETE",
    AutoreloadEnable = "AUTORELOAD_ENABLE",
    AutoreloadUpdate = "AUTORELOAD_UPDATE",
    AutoreloadDisable = "AUTORELOAD_DISABLE"
}
