import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Create New Event Request Payload Object
 */
export declare class CreateEventRequestBody extends SpeakeasyBase {
    /**
     * Event Body
     */
    body?: Record<string, any>;
    /**
     * Member ID
     */
    from: string;
    /**
     * Member ID
     */
    to?: string;
    /**
     * Event type
     */
    type: string;
}
export declare class CreateEventRequest extends SpeakeasyBase {
    requestBody?: CreateEventRequestBody;
    /**
     * Conversation ID
     */
    conversationId: string;
}
/**
 * Create New Event Response Payload Object
 */
export declare class CreateEvent201ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a conversation event included in Conversation API
     */
    href?: string;
    /**
     * Event id. This is a progressive integer
     */
    id?: string;
    /**
     * Time of event creation
     */
    timestamp?: string;
}
export declare class CreateEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create New Event Response Payload Object
     */
    createEvent201ApplicationJSONObject?: CreateEvent201ApplicationJSON;
}
