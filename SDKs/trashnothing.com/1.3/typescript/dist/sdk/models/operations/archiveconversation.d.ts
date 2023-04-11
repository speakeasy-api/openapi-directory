import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArchiveConversationRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation to archive.
     */
    conversationId: string;
}
export declare class ArchiveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
