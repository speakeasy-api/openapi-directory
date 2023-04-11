import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserProperties500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserProperties500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserProperties500ApplicationJSONMeta;
}
export declare class GetUserProperties429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserProperties429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserProperties429ApplicationJSONMeta;
}
export declare class GetUserProperties403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserProperties403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserProperties403ApplicationJSONMeta;
}
export declare class GetUserProperties401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserProperties401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetUserProperties401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class GetUserProperties400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class GetUserProperties400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: GetUserProperties400ApplicationJSONErrorsParameters;
}
export declare class GetUserProperties400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetUserProperties400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: GetUserProperties400ApplicationJSONErrors;
    message: string;
    meta: GetUserProperties400ApplicationJSONMeta;
}
/**
 * Property group details
 */
export declare class GetUserProperties200ApplicationJSONDataGroup extends SpeakeasyBase {
    id: string;
    name: string;
}
/**
 * Properties details
 */
export declare class GetUserProperties200ApplicationJSONData extends SpeakeasyBase {
    /**
     * Property group details
     */
    group?: GetUserProperties200ApplicationJSONDataGroup;
    isComputed: boolean;
    label: string;
    name: string;
}
export declare class GetUserProperties200ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
 */
export declare class GetUserProperties200ApplicationJSON extends SpeakeasyBase {
    data: GetUserProperties200ApplicationJSONData[];
    meta: GetUserProperties200ApplicationJSONMeta;
}
export declare class GetUserPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User Properties
     */
    getUserProperties200ApplicationJSONObject?: GetUserProperties200ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    getUserProperties400ApplicationJSONObject?: GetUserProperties400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    getUserProperties401ApplicationJSONObject?: GetUserProperties401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    getUserProperties403ApplicationJSONObject?: GetUserProperties403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    getUserProperties429ApplicationJSONObject?: GetUserProperties429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    getUserProperties500ApplicationJSONObject?: GetUserProperties500ApplicationJSON;
}
