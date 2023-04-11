import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Child link for an account entry. Points to the list of web properties for this account.
 */
export declare class AccountChildLink extends SpeakeasyBase {
    /**
     * Link to the list of web properties for this account.
     */
    href?: string;
    /**
     * Type of the child link. Its value is "analytics#webproperties".
     */
    type?: string;
}
/**
 * Permissions the user has for this account.
 */
export declare class AccountPermissions extends SpeakeasyBase {
    /**
     * All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW).
     */
    effective?: string[];
}
/**
 * JSON template for Analytics account entry.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Child link for an account entry. Points to the list of web properties for this account.
     */
    childLink?: AccountChildLink;
    /**
     * Time the account was created.
     */
    created?: Date;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Resource type for Analytics account.
     */
    kind?: string;
    /**
     * Account name.
     */
    name?: string;
    /**
     * Permissions the user has for this account.
     */
    permissions?: AccountPermissions;
    /**
     * Link for this account.
     */
    selfLink?: string;
    /**
     * Indicates whether this account is starred or not.
     */
    starred?: boolean;
    /**
     * Time the account was last modified.
     */
    updated?: Date;
}
/**
 * JSON template for Analytics account entry.
 */
export declare class AccountInput extends SpeakeasyBase {
    /**
     * Child link for an account entry. Points to the list of web properties for this account.
     */
    childLink?: AccountChildLink;
    /**
     * Time the account was created.
     */
    created?: Date;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Resource type for Analytics account.
     */
    kind?: string;
    /**
     * Account name.
     */
    name?: string;
    /**
     * Link for this account.
     */
    selfLink?: string;
    /**
     * Indicates whether this account is starred or not.
     */
    starred?: boolean;
    /**
     * Time the account was last modified.
     */
    updated?: Date;
}
