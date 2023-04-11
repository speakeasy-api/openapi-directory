import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteEventRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
    /**
     * Event ID
     */
    eventId: string;
}
export declare class DeleteEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success response with empty JSON
     */
    deleteEvent200ApplicationJSONObject?: Record<string, any>;
}
