import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1ConversationsIdReadSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1ConversationsIdReadRequest extends SpeakeasyBase {
    /**
     * ID of the conversation in the database
     */
    id: string;
}
export declare class PostApiV1ConversationsIdReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The value of unread has been changed to false..
     */
    conversation?: shared.Conversation;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
