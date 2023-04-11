import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatement } from "./accountstatement";
/**
 * A list of Account Statement objects
 */
export declare class AccountStatementList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: AccountStatement[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
