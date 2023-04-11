import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class GetEventsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetEventsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetEventsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A Probely event
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getEventsId401ApplicationJSONObject?: GetEventsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getEventsId403ApplicationJSONObject?: GetEventsId403ApplicationJSON;
    /**
     * Not found
     */
    getEventsId404ApplicationJSONObject?: GetEventsId404ApplicationJSON;
}
