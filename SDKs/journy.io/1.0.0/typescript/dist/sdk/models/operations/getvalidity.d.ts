import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetValidity500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetValidity500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetValidity500ApplicationJSONMeta;
}
export declare class GetValidity429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetValidity429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetValidity429ApplicationJSONMeta;
}
export declare class GetValidity403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetValidity403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetValidity403ApplicationJSONMeta;
}
export declare class GetValidity401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class GetValidity401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: GetValidity401ApplicationJSONMeta;
}
/**
 * Validation of API Key
 */
export declare class GetValidity200ApplicationJSONData extends SpeakeasyBase {
    permissions: string[];
}
export declare class GetValidity200ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
 */
export declare class GetValidity200ApplicationJSON extends SpeakeasyBase {
    /**
     * Validation of API Key
     */
    data: GetValidity200ApplicationJSONData;
    meta: GetValidity200ApplicationJSONMeta;
}
export declare class GetValidityResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Key validation
     */
    getValidity200ApplicationJSONObject?: GetValidity200ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    getValidity401ApplicationJSONObject?: GetValidity401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    getValidity403ApplicationJSONObject?: GetValidity403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    getValidity429ApplicationJSONObject?: GetValidity429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    getValidity500ApplicationJSONObject?: GetValidity500ApplicationJSON;
}
