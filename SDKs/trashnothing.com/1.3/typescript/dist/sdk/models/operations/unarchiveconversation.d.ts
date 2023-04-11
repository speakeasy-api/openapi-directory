import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnarchiveConversationRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation to unarchive.
     */
    conversationId: string;
}
export declare class UnarchiveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
