import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEvents500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetEvents500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetEvents500ApplicationJSONMeta;
}
export declare class GetEvents429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetEvents429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetEvents429ApplicationJSONMeta;
}
export declare class GetEvents403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetEvents403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetEvents403ApplicationJSONMeta;
}
export declare class GetEvents401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetEvents401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetEvents401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class GetEvents400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class GetEvents400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: GetEvents400ApplicationJSONErrorsParameters;
}
export declare class GetEvents400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetEvents400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: GetEvents400ApplicationJSONErrors;
    message: string;
    meta: GetEvents400ApplicationJSONMeta;
}
/**
 * Event group details
 */
export declare class GetEvents200ApplicationJSONDataGroup extends SpeakeasyBase {
    id: string;
    name: string;
}
/**
 * Event details
 */
export declare class GetEvents200ApplicationJSONData extends SpeakeasyBase {
    /**
     * Event group details
     */
    group?: GetEvents200ApplicationJSONDataGroup;
    id: string;
    name: string;
}
export declare class GetEvents200ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
 */
export declare class GetEvents200ApplicationJSON extends SpeakeasyBase {
    data: GetEvents200ApplicationJSONData[];
    meta: GetEvents200ApplicationJSONMeta;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Events
     */
    getEvents200ApplicationJSONObject?: GetEvents200ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    getEvents400ApplicationJSONObject?: GetEvents400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    getEvents401ApplicationJSONObject?: GetEvents401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    getEvents403ApplicationJSONObject?: GetEvents403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    getEvents429ApplicationJSONObject?: GetEvents429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    getEvents500ApplicationJSONObject?: GetEvents500ApplicationJSON;
}
