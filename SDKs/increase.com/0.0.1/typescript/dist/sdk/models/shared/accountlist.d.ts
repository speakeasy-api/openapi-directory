import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * A list of Account objects
 */
export declare class AccountList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: Account[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
