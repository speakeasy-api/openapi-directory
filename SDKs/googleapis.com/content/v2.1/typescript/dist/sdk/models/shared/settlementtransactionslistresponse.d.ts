import { SpeakeasyBase } from "../../../internal/utils";
import { SettlementTransaction } from "./settlementtransaction";
/**
 * Successful response
 */
export declare class SettlementtransactionsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementtransactionsListResponse`".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of returns.
     */
    nextPageToken?: string;
    resources?: SettlementTransaction[];
}
