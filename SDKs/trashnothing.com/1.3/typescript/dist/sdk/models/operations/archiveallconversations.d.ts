import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArchiveAllConversationsRequestBody extends SpeakeasyBase {
    /**
     * The message_id of the most recent message from the conversations that the client has downloaded.
     */
    messageId: string;
}
export declare class ArchiveAllConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
