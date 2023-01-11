import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User identification requires a userId, email or both
**/
export declare class UpsertUserRequestBodyIdentification extends SpeakeasyBase {
    email?: string;
    userId?: string;
}
/**
 * Update properties of a user
**/
export declare class UpsertUserRequestBody extends SpeakeasyBase {
    identification: UpsertUserRequestBodyIdentification;
    properties?: Record<string, any>;
}
export declare class UpsertUser201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The object was created
**/
export declare class UpsertUser201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class UpsertUser400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class UpsertUser400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Record<string, string>;
    parameters?: UpsertUser400ApplicationJsonErrorsParameters;
}
export declare class UpsertUser400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * Specify the fields and/ or parameters that had errors
**/
export declare class UpsertUser400ApplicationJson extends SpeakeasyBase {
    errors: UpsertUser400ApplicationJsonErrors;
    message: string;
    meta: UpsertUser400ApplicationJsonMeta;
}
export declare class UpsertUser401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class UpsertUser401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser401ApplicationJsonMeta;
}
export declare class UpsertUser403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class UpsertUser403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser403ApplicationJsonMeta;
}
export declare class UpsertUser429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class UpsertUser429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser429ApplicationJsonMeta;
}
export declare class UpsertUser500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class UpsertUser500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser500ApplicationJsonMeta;
}
export declare class UpsertUserRequest extends SpeakeasyBase {
    request: UpsertUserRequestBody;
}
export declare class UpsertUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    upsertUser201ApplicationJSONObject?: UpsertUser201ApplicationJson;
    upsertUser400ApplicationJSONObject?: UpsertUser400ApplicationJson;
    upsertUser401ApplicationJSONObject?: UpsertUser401ApplicationJson;
    upsertUser403ApplicationJSONObject?: UpsertUser403ApplicationJson;
    upsertUser429ApplicationJSONObject?: UpsertUser429ApplicationJson;
    upsertUser500ApplicationJSONObject?: UpsertUser500ApplicationJson;
}
