import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the event.
     */
    id: string;
}
export declare class GetEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
