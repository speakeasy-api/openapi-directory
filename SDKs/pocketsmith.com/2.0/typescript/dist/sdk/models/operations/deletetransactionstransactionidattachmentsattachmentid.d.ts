import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the attachment.
     */
    attachmentId: number;
    /**
     * The unique identifier of the transaction.
     */
    transactionId: number;
}
export declare class DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
