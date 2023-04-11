import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTransactionsTransactionIdRelationshipsTagsRequest extends SpeakeasyBase {
    updateTransactionTagsRequest?: shared.UpdateTransactionTagsRequest;
    /**
     * The unique identifier for the transaction.
     *
     * @remarks
     *
     */
    transactionId: string;
}
export declare class PostTransactionsTransactionIdRelationshipsTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
