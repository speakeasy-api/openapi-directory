import { SpeakeasyBase } from "../../../internal/utils";
import { HeldAccount } from "./heldaccount";
/**
 * Returns a list of the accounts covered by a hold.
 */
export declare class ListHeldAccountsResponse extends SpeakeasyBase {
    /**
     * The held accounts on a hold.
     */
    accounts?: HeldAccount[];
}
