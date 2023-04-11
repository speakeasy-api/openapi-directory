import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const RecordConversationServerList: readonly ["https://api.nexmo.com/v1"];
/**
 * Record Conversation Request Payload Object
 */
export declare class RecordConversationRequestBody extends SpeakeasyBase {
    /**
     * Recording Action
     */
    action: shared.ActionEnum;
    /**
     * The HTTP method used to send event information to event_url.
     */
    eventMethod?: string;
    /**
     * The webhook endpoint where recording progress events are sent to.
     */
    eventUrl?: string[];
    /**
     * Record the Conversation in a specific format.
     */
    format?: shared.FormatEnum;
    /**
     * Record the sent and received audio in separate channels of a stereo recording
     */
    split?: string;
}
export declare class RecordConversationRequest extends SpeakeasyBase {
    /**
     * Record Conversation Request Payload Object
     */
    requestBody?: RecordConversationRequestBody;
    /**
     * Conversation ID
     */
    conversationId: string;
}
export declare class RecordConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
