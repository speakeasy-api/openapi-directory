import { SpeakeasyBase } from "../../../internal/utils";
import { AccountNumber } from "./accountnumber";
/**
 * A list of Account Number objects
 */
export declare class AccountNumberList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: AccountNumber[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
