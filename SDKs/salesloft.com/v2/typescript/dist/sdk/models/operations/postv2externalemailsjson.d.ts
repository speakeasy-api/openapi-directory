import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2ExternalEmailsJsonRequestBody extends SpeakeasyBase {
    /**
     * Email address of mailbox email was sent to
     */
    mailbox: string;
    /**
     * Base64 encoded MIME email content
     */
    raw: string;
}
export declare class PostV2ExternalEmailsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
