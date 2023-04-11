import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class GetEvents403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetEvents401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Event list
 */
export declare class GetEvents200ApplicationJSON extends SpeakeasyBase {
    /**
     * Number of objects in the response.
     */
    count?: number;
    /**
     * Number of objects per page.
     */
    length?: number;
    /**
     * Current page.
     */
    page?: number;
    /**
     * Number of pages.
     */
    pageTotal?: number;
    /**
     * Event objects
     */
    results?: shared.Event[];
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Event list
     */
    getEvents200ApplicationJSONObject?: GetEvents200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getEvents401ApplicationJSONObject?: GetEvents401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getEvents403ApplicationJSONObject?: GetEvents403ApplicationJSON;
}
