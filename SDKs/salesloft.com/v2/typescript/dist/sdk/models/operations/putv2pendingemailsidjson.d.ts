import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2PendingEmailsIdJsonRequestBody extends SpeakeasyBase {
    /**
     * The error message indicating why the email failed to send
     */
    errorMessage?: string;
    /**
     * The message id of the email that was sent
     */
    messageId: string;
    /**
     * The time that the email was actually sent in iso8601 format
     */
    sentAt?: string;
    /**
     * Delivery status of the email.  Valid statuses are 'sent' and 'failed'
     */
    status: string;
}
export declare class PutV2PendingEmailsIdJsonRequest extends SpeakeasyBase {
    requestBody: PutV2PendingEmailsIdJsonRequestBody;
    /**
     * Email ID
     */
    id: string;
}
export declare class PutV2PendingEmailsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
