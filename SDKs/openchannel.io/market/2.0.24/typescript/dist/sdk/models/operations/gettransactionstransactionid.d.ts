import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTransactionsTransactionIdRequest extends SpeakeasyBase {
    /**
     * The id of the transaction to return
     */
    transactionId: string;
}
export declare class GetTransactionsTransactionIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
