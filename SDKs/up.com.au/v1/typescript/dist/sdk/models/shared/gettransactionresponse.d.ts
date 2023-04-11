import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionResource } from "./transactionresource";
/**
 * Successful response to get a single transaction.
 *
 * @remarks
 *
 */
export declare class GetTransactionResponse extends SpeakeasyBase {
    /**
     * The transaction returned in this response.
     *
     * @remarks
     *
     */
    data: TransactionResource;
}
