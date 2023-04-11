import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Profile } from "./profile";
import { Webproperty } from "./webproperty";
/**
 * JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
 */
export declare class AccountTreeResponse extends SpeakeasyBase {
    /**
     * JSON template for Analytics account entry.
     */
    account?: Account;
    /**
     * Resource type for account ticket.
     */
    kind?: string;
    /**
     * JSON template for an Analytics view (profile).
     */
    profile?: Profile;
    /**
     * JSON template for an Analytics web property.
     */
    webproperty?: Webproperty;
}
