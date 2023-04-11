import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdEventsRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdEvents404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdEvents403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdEvents401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Event list
 */
export declare class GetTargetsTargetIdEvents200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Event list
     */
    getTargetsTargetIdEvents200ApplicationJSONObject?: GetTargetsTargetIdEvents200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdEvents401ApplicationJSONObject?: GetTargetsTargetIdEvents401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdEvents403ApplicationJSONObject?: GetTargetsTargetIdEvents403ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdEvents404ApplicationJSONObject?: GetTargetsTargetIdEvents404ApplicationJSON;
}
