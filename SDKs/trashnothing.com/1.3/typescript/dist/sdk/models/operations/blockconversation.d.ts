import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BlockConversationRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation to block.
     */
    conversationId: string;
}
export declare class BlockConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
