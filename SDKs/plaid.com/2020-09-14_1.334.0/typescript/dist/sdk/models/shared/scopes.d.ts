import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";
/**
 * The scopes object
 */
export declare class Scopes extends SpeakeasyBase {
    accounts?: AccountAccess[];
    /**
     * Allow access to newly opened accounts as they are opened. If unset, defaults to `true`.
     */
    newAccounts?: boolean;
    /**
     * The product access being requested. Used to or disallow product access across all accounts. If unset, defaults to all products allowed.
     */
    productAccess?: Record<string, any>;
}
