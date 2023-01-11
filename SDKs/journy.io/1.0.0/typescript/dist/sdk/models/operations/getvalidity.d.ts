import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Validation of API Key
**/
export declare class GetValidity200ApplicationJsonData extends SpeakeasyBase {
    permissions: string[];
}
export declare class GetValidity200ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The basic response containing the unique ID of the request and the response status
**/
export declare class GetValidity200ApplicationJson extends SpeakeasyBase {
    data: GetValidity200ApplicationJsonData;
    meta: GetValidity200ApplicationJsonMeta;
}
export declare class GetValidity401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class GetValidity401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity401ApplicationJsonMeta;
}
export declare class GetValidity403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class GetValidity403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity403ApplicationJsonMeta;
}
export declare class GetValidity429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class GetValidity429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity429ApplicationJsonMeta;
}
export declare class GetValidity500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class GetValidity500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity500ApplicationJsonMeta;
}
export declare class GetValidityResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getValidity200ApplicationJSONObject?: GetValidity200ApplicationJson;
    getValidity401ApplicationJSONObject?: GetValidity401ApplicationJson;
    getValidity403ApplicationJSONObject?: GetValidity403ApplicationJson;
    getValidity429ApplicationJSONObject?: GetValidity429ApplicationJson;
    getValidity500ApplicationJSONObject?: GetValidity500ApplicationJson;
}
