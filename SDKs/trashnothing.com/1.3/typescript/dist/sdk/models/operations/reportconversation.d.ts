import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportConversationRequestBody extends SpeakeasyBase {
    /**
     * A user provided reason why the conversation is being reported.
     */
    reason: string;
}
export declare class ReportConversationRequest extends SpeakeasyBase {
    requestBody: ReportConversationRequestBody;
    /**
     * The ID of the conversation to report.
     */
    conversationId: string;
}
export declare class ReportConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
