import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveUserFromAccountPathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * The user being added/removed from the account
**/
export declare class RemoveUserFromAccountRequestBody extends SpeakeasyBase {
    userId: string;
}
export declare class RemoveUserFromAccount201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The object was created
**/
export declare class RemoveUserFromAccount201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class RemoveUserFromAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class RemoveUserFromAccount400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Record<string, string>;
    parameters?: RemoveUserFromAccount400ApplicationJsonErrorsParameters;
}
export declare class RemoveUserFromAccount400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * Specify the fields and/ or parameters that had errors
**/
export declare class RemoveUserFromAccount400ApplicationJson extends SpeakeasyBase {
    errors: RemoveUserFromAccount400ApplicationJsonErrors;
    message: string;
    meta: RemoveUserFromAccount400ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class RemoveUserFromAccount401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount401ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class RemoveUserFromAccount403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount403ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class RemoveUserFromAccount429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount429ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class RemoveUserFromAccount500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount500ApplicationJsonMeta;
}
export declare class RemoveUserFromAccountRequest extends SpeakeasyBase {
    pathParams: RemoveUserFromAccountPathParams;
    request: RemoveUserFromAccountRequestBody;
}
export declare class RemoveUserFromAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    removeUserFromAccount201ApplicationJSONObject?: RemoveUserFromAccount201ApplicationJson;
    removeUserFromAccount400ApplicationJSONObject?: RemoveUserFromAccount400ApplicationJson;
    removeUserFromAccount401ApplicationJSONObject?: RemoveUserFromAccount401ApplicationJson;
    removeUserFromAccount403ApplicationJSONObject?: RemoveUserFromAccount403ApplicationJson;
    removeUserFromAccount429ApplicationJSONObject?: RemoveUserFromAccount429ApplicationJson;
    removeUserFromAccount500ApplicationJSONObject?: RemoveUserFromAccount500ApplicationJson;
}
