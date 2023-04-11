import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdEventsIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdEventsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdEventsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdEventsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdEventsIdResponse extends SpeakeasyBase {
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
    getTargetsTargetIdEventsId401ApplicationJSONObject?: GetTargetsTargetIdEventsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdEventsId403ApplicationJSONObject?: GetTargetsTargetIdEventsId403ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdEventsId404ApplicationJSONObject?: GetTargetsTargetIdEventsId404ApplicationJSON;
}
