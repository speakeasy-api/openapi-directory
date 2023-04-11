import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserSegments500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserSegments500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserSegments500ApplicationJSONMeta;
}
export declare class GetUserSegments429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserSegments429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserSegments429ApplicationJSONMeta;
}
export declare class GetUserSegments403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserSegments403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserSegments403ApplicationJSONMeta;
}
export declare class GetUserSegments401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserSegments401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserSegments401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class GetUserSegments400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class GetUserSegments400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: GetUserSegments400ApplicationJSONErrorsParameters;
}
export declare class GetUserSegments400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserSegments400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: GetUserSegments400ApplicationJSONErrors;
    message: string;
    meta: GetUserSegments400ApplicationJSONMeta;
}
/**
 * Segment details
 */
export declare class GetUserSegments200ApplicationJSONData extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetUserSegments200ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
 */
export declare class GetUserSegments200ApplicationJSON extends SpeakeasyBase {
    data: GetUserSegments200ApplicationJSONData[];
    meta: GetUserSegments200ApplicationJSONMeta;
}
export declare class GetUserSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User Segments
     */
    getUserSegments200ApplicationJSONObject?: GetUserSegments200ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    getUserSegments400ApplicationJSONObject?: GetUserSegments400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    getUserSegments401ApplicationJSONObject?: GetUserSegments401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    getUserSegments403ApplicationJSONObject?: GetUserSegments403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    getUserSegments429ApplicationJSONObject?: GetUserSegments429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    getUserSegments500ApplicationJSONObject?: GetUserSegments500ApplicationJSON;
}
