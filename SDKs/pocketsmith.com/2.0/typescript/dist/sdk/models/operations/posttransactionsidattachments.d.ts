import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTransactionsIdAttachmentsRequestBody extends SpeakeasyBase {
    /**
     * The unique identifier of the attachment.
     */
    attachmentId?: number;
}
export declare class PostTransactionsIdAttachmentsRequest extends SpeakeasyBase {
    requestBody?: PostTransactionsIdAttachmentsRequestBody;
    /**
     * The unique identifier of the transaction.
     */
    id: number;
}
export declare class PostTransactionsIdAttachmentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    attachment?: shared.Attachment;
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
