import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * A developer's connected Stripe accounts
 */
export declare class Accounts extends SpeakeasyBase {
    /**
     * An array of connected Stripe accounts
     */
    accounts: Account[];
    /**
     * The id of the developer
     */
    developerId: string;
}
