import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieve Events Response Payload Object
     */
    eventRetrieveds?: shared.EventRetrieved[];
}
