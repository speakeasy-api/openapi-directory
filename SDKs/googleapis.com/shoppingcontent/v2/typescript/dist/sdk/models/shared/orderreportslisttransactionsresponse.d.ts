import { SpeakeasyBase } from "../../../internal/utils";
import { OrderReportTransaction } from "./orderreporttransaction";
/**
 * Successful response
 */
export declare class OrderreportsListTransactionsResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListTransactionsResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of transactions.
     */
    nextPageToken?: string;
    /**
     * The list of transactions.
     */
    transactions?: OrderReportTransaction[];
}
