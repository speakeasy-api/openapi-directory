import { SpeakeasyBase } from "../../../internal/utils";
import { Account, AccountInput } from "./account";
import { Profile, ProfileInput } from "./profile";
import { Webproperty, WebpropertyInput } from "./webproperty";
/**
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
 */
export declare class AccountTicketInput extends SpeakeasyBase {
    /**
     * JSON template for Analytics account entry.
     */
    account?: AccountInput;
    /**
     * Account ticket ID used to access the account ticket.
     */
    id?: string;
    /**
     * Resource type for account ticket.
     */
    kind?: string;
    /**
     * JSON template for an Analytics view (profile).
     */
    profile?: ProfileInput;
    /**
     * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.
     */
    redirectUri?: string;
    /**
     * JSON template for an Analytics web property.
     */
    webproperty?: WebpropertyInput;
}
/**
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
 */
export declare class AccountTicket extends SpeakeasyBase {
    /**
     * JSON template for Analytics account entry.
     */
    account?: Account;
    /**
     * Account ticket ID used to access the account ticket.
     */
    id?: string;
    /**
     * Resource type for account ticket.
     */
    kind?: string;
    /**
     * JSON template for an Analytics view (profile).
     */
    profile?: Profile;
    /**
     * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.
     */
    redirectUri?: string;
    /**
     * JSON template for an Analytics web property.
     */
    webproperty?: Webproperty;
}
