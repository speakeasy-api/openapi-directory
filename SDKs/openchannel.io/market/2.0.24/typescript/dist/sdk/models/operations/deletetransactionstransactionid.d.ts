import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTransactionsTransactionIdRequest extends SpeakeasyBase {
    /**
     * The id of the transaction to be deleted
     */
    transactionId: string;
}
export declare class DeleteTransactionsTransactionIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
