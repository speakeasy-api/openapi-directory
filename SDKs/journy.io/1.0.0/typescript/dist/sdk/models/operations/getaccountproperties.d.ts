import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountProperties500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountProperties500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountProperties500ApplicationJSONMeta;
}
export declare class GetAccountProperties429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountProperties429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountProperties429ApplicationJSONMeta;
}
export declare class GetAccountProperties403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountProperties403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountProperties403ApplicationJSONMeta;
}
export declare class GetAccountProperties401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountProperties401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetAccountProperties401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class GetAccountProperties400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class GetAccountProperties400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: GetAccountProperties400ApplicationJSONErrorsParameters;
}
export declare class GetAccountProperties400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetAccountProperties400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: GetAccountProperties400ApplicationJSONErrors;
    message: string;
    meta: GetAccountProperties400ApplicationJSONMeta;
}
/**
 * Property group details
 */
export declare class GetAccountProperties200ApplicationJSONDataGroup extends SpeakeasyBase {
    id: string;
    name: string;
}
/**
 * Properties details
 */
export declare class GetAccountProperties200ApplicationJSONData extends SpeakeasyBase {
    /**
     * Property group details
     */
    group?: GetAccountProperties200ApplicationJSONDataGroup;
    isComputed: boolean;
    label: string;
    name: string;
}
export declare class GetAccountProperties200ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
 */
export declare class GetAccountProperties200ApplicationJSON extends SpeakeasyBase {
    data: GetAccountProperties200ApplicationJSONData[];
    meta: GetAccountProperties200ApplicationJSONMeta;
}
export declare class GetAccountPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Properties
     */
    getAccountProperties200ApplicationJSONObject?: GetAccountProperties200ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    getAccountProperties400ApplicationJSONObject?: GetAccountProperties400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    getAccountProperties401ApplicationJSONObject?: GetAccountProperties401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    getAccountProperties403ApplicationJSONObject?: GetAccountProperties403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    getAccountProperties429ApplicationJSONObject?: GetAccountProperties429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    getAccountProperties500ApplicationJSONObject?: GetAccountProperties500ApplicationJSON;
}
