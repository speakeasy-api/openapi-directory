import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxBankAccount } from "./sandboxbankaccount";
import { SandboxCard } from "./sandboxcard";
import { SandboxRetryCacheEntry } from "./sandboxretrycacheentry";
/**
 * User data
 */
export declare class SandboxUser extends SpeakeasyBase {
    /**
     * List of accounts
     */
    accounts?: SandboxBankAccount[];
    /**
     * List of cards
     */
    cards?: SandboxCard[];
    /**
     * Retry cache entries
     */
    retryCacheEntries?: SandboxRetryCacheEntry[];
    /**
     * Connected user id
     */
    userId?: string;
}
