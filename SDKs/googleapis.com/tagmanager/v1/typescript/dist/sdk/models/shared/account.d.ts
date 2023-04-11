import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Google Tag Manager Account.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * The Account ID uniquely identifies the GTM Account.
     */
    accountId?: string;
    /**
     * The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string;
    /**
     * Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
     */
    name?: string;
    /**
     * Whether the account shares data anonymously with Google and others. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
     */
    shareData?: boolean;
}
