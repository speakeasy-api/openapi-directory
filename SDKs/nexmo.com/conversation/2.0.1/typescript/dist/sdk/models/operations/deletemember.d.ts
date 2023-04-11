import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMemberRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
    /**
     * Member ID
     */
    memberId: string;
}
export declare class DeleteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success response with empty JSON
     */
    deleteMember200ApplicationJSONObject?: Record<string, any>;
}
