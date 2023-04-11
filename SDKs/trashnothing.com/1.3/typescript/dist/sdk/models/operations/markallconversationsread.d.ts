import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MarkAllConversationsReadRequestBody extends SpeakeasyBase {
    /**
     * The message_id of the most recent message from the conversations that the client has downloaded.
     */
    messageId: string;
}
export declare class MarkAllConversationsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
