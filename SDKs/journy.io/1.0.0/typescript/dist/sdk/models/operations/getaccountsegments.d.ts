import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountSegments500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountSegments500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountSegments500ApplicationJSONMeta;
}
export declare class GetAccountSegments429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountSegments429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountSegments429ApplicationJSONMeta;
}
export declare class GetAccountSegments403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountSegments403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountSegments403ApplicationJSONMeta;
}
export declare class GetAccountSegments401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountSegments401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountSegments401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class GetAccountSegments400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class GetAccountSegments400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: GetAccountSegments400ApplicationJSONErrorsParameters;
}
export declare class GetAccountSegments400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountSegments400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: GetAccountSegments400ApplicationJSONErrors;
    message: string;
    meta: GetAccountSegments400ApplicationJSONMeta;
}
/**
 * Segment details
 */
export declare class GetAccountSegments200ApplicationJSONData extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetAccountSegments200ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
 */
export declare class GetAccountSegments200ApplicationJSON extends SpeakeasyBase {
    data: GetAccountSegments200ApplicationJSONData[];
    meta: GetAccountSegments200ApplicationJSONMeta;
}
export declare class GetAccountSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Segments
     */
    getAccountSegments200ApplicationJSONObject?: GetAccountSegments200ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    getAccountSegments400ApplicationJSONObject?: GetAccountSegments400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    getAccountSegments401ApplicationJSONObject?: GetAccountSegments401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    getAccountSegments403ApplicationJSONObject?: GetAccountSegments403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    getAccountSegments429ApplicationJSONObject?: GetAccountSegments429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    getAccountSegments500ApplicationJSONObject?: GetAccountSegments500ApplicationJSON;
}
