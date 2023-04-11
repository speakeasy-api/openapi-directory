import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTrackingSnippetRequest extends SpeakeasyBase {
    /**
     * The domain you want to receive a snippet for
     */
    domain: string;
}
export declare class GetTrackingSnippet500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetTrackingSnippet500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet500ApplicationJSONMeta;
}
export declare class GetTrackingSnippet429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetTrackingSnippet429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet429ApplicationJSONMeta;
}
export declare class GetTrackingSnippet404ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetTrackingSnippet404ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet404ApplicationJSONMeta;
}
export declare class GetTrackingSnippet403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetTrackingSnippet403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet403ApplicationJSONMeta;
}
export declare class GetTrackingSnippet401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetTrackingSnippet401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class GetTrackingSnippet400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class GetTrackingSnippet400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: GetTrackingSnippet400ApplicationJSONErrorsParameters;
}
export declare class GetTrackingSnippet400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetTrackingSnippet400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: GetTrackingSnippet400ApplicationJSONErrors;
    message: string;
    meta: GetTrackingSnippet400ApplicationJSONMeta;
}
/**
 * A snippet
 */
export declare class GetTrackingSnippet200ApplicationJSONData extends SpeakeasyBase {
    domain: string;
    snippet: string;
}
export declare class GetTrackingSnippet200ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
 */
export declare class GetTrackingSnippet200ApplicationJSON extends SpeakeasyBase {
    /**
     * A snippet
     */
    data: GetTrackingSnippet200ApplicationJSONData;
    meta: GetTrackingSnippet200ApplicationJSONMeta;
}
export declare class GetTrackingSnippetResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Snippet
     */
    getTrackingSnippet200ApplicationJSONObject?: GetTrackingSnippet200ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    getTrackingSnippet400ApplicationJSONObject?: GetTrackingSnippet400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    getTrackingSnippet401ApplicationJSONObject?: GetTrackingSnippet401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    getTrackingSnippet403ApplicationJSONObject?: GetTrackingSnippet403ApplicationJSON;
    /**
     * Not found
     */
    getTrackingSnippet404ApplicationJSONObject?: GetTrackingSnippet404ApplicationJSON;
    /**
     * Too many API requests were send
     */
    getTrackingSnippet429ApplicationJSONObject?: GetTrackingSnippet429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    getTrackingSnippet500ApplicationJSONObject?: GetTrackingSnippet500ApplicationJSON;
}
