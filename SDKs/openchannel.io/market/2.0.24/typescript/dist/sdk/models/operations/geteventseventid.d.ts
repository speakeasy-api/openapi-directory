import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEventsEventIdRequest extends SpeakeasyBase {
    /**
     * The id of the event
     */
    eventId: string;
}
export declare class GetEventsEventIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
