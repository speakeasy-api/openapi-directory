import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEventTypeServerList: readonly ["https://events.twilio.com"];
export declare class FetchEventTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEventTypeRequest extends SpeakeasyBase {
    /**
     * A string that uniquely identifies this Event Type.
     */
    type: string;
}
export declare class FetchEventTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1EventType?: shared.EventsV1EventType;
}
