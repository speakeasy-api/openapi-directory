import { SpeakeasyBase } from "../../../internal/utils";
import { AccountFeatures } from "./accountfeatures";
/**
 * Represents a Google Tag Manager Account.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * The Account ID uniquely identifies the GTM Account.
     */
    accountId?: string;
    features?: AccountFeatures;
    /**
     * The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string;
    /**
     * Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
     */
    name?: string;
    /**
     * GTM Account's API relative path.
     */
    path?: string;
    /**
     * Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
     */
    shareData?: boolean;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
}
