import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTransactionsTransactionIdRelationshipsCategoryRequest extends SpeakeasyBase {
    updateTransactionCategoryRequest?: shared.UpdateTransactionCategoryRequest;
    /**
     * The unique identifier for the transaction.
     *
     * @remarks
     *
     */
    transactionId: string;
}
export declare class PatchTransactionsTransactionIdRelationshipsCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
