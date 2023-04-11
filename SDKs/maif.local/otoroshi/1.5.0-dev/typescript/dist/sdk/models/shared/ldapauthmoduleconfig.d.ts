import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to authenticate users using a generic OAuth2 provider
 */
export declare class LdapAuthModuleConfig extends SpeakeasyBase {
    /**
     * The admin password
     */
    adminPassword: string;
    /**
     * The admin username
     */
    adminUsername: string;
    /**
     * Description of the config
     */
    desc: string;
    /**
     * Field name to get email from user profile
     */
    emailField: string;
    /**
     * Filter for groups
     */
    groupFilter: string;
    /**
     * Unique id of the config
     */
    id: string;
    /**
     * Name of the config
     */
    name: string;
    /**
     * Field name to get name from user profile
     */
    nameField: string;
    /**
     * Field name to get otoroshi metadata from. You can specify sub fields using | as separator
     */
    otoroshiDataField?: string;
    /**
     * LDAP search base
     */
    searchBase: string;
    /**
     * Filter for users
     */
    searchFilter: string;
    /**
     * URL of the ldap server
     */
    serverUrl: string;
    /**
     * Max age of the session
     */
    sessionMaxAge: number;
    /**
     * Type of settings. value is ldap
     */
    type: string;
    /**
     * LDAP user base DN
     */
    userBase: string;
}
