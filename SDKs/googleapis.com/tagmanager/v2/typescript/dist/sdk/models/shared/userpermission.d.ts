import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";
import { ContainerAccess } from "./containeraccess";
/**
 * Represents a user's permissions to an account and its container.
 */
export declare class UserPermission extends SpeakeasyBase {
    /**
     * Defines the Google Tag Manager Account access permissions.
     */
    accountAccess?: AccountAccess;
    /**
     * The Account ID uniquely identifies the GTM Account.
     */
    accountId?: string;
    /**
     * GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
     */
    containerAccess?: ContainerAccess[];
    /**
     * User's email address. @mutable tagmanager.accounts.permissions.create
     */
    emailAddress?: string;
    /**
     * GTM UserPermission's API relative path.
     */
    path?: string;
}
