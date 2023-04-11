import { SpeakeasyBase } from "../../../internal/utils";
import { CheckDeposit } from "./checkdeposit";
/**
 * A list of Check Deposit objects
 */
export declare class CheckDepositList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: CheckDeposit[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
