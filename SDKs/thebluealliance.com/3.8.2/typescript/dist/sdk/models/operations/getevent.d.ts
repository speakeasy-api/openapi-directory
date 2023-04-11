import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    event?: shared.Event;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
