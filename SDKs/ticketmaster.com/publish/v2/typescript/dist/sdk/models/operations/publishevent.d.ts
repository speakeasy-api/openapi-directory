import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishEventRequest extends SpeakeasyBase {
    /**
     * Event
     */
    event: shared.Event;
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
}
export declare class PublishEventResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
