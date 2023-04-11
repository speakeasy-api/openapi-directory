import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionsIdAttachmentsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the transaction.
     */
    id: number;
}
export declare class GetTransactionsIdAttachmentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    attachments?: shared.Attachment[];
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
