import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
    /**
     * Event ID
     */
    eventId: string;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieve an event Content Payload
     */
    eventRetrieved?: shared.EventRetrieved;
}
