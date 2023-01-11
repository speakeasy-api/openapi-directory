import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Account identification requires an accountId, domain or both
**/
export declare class UpsertAccountRequestBodyIdentification extends SpeakeasyBase {
    accountId?: string;
    domain?: string;
}
/**
 * User identification requires a userId, email or both
**/
export declare class UpsertAccountRequestBodyMembersIdentification extends SpeakeasyBase {
    email?: string;
    userId?: string;
}
/**
 * Identification requires an accountId, domain or both
**/
export declare class UpsertAccountRequestBodyMembers extends SpeakeasyBase {
    identification: UpsertAccountRequestBodyMembersIdentification;
}
/**
 * Update properties and/or members of an account
**/
export declare class UpsertAccountRequestBody extends SpeakeasyBase {
    identification: UpsertAccountRequestBodyIdentification;
    members?: UpsertAccountRequestBodyMembers[];
    properties?: Record<string, any>;
}
export declare class UpsertAccount201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The object was created
**/
export declare class UpsertAccount201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class UpsertAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class UpsertAccount400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Record<string, string>;
    parameters?: UpsertAccount400ApplicationJsonErrorsParameters;
}
export declare class UpsertAccount400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * Specify the fields and/ or parameters that had errors
**/
export declare class UpsertAccount400ApplicationJson extends SpeakeasyBase {
    errors: UpsertAccount400ApplicationJsonErrors;
    message: string;
    meta: UpsertAccount400ApplicationJsonMeta;
}
export declare class UpsertAccount401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class UpsertAccount401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount401ApplicationJsonMeta;
}
export declare class UpsertAccount429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class UpsertAccount429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount429ApplicationJsonMeta;
}
export declare class UpsertAccount500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class UpsertAccount500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount500ApplicationJsonMeta;
}
export declare class UpsertAccountRequest extends SpeakeasyBase {
    request: UpsertAccountRequestBody;
}
export declare class UpsertAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    upsertAccount201ApplicationJSONObject?: UpsertAccount201ApplicationJson;
    upsertAccount400ApplicationJSONObject?: UpsertAccount400ApplicationJson;
    upsertAccount401ApplicationJSONObject?: UpsertAccount401ApplicationJson;
    upsertAccount429ApplicationJSONObject?: UpsertAccount429ApplicationJson;
    upsertAccount500ApplicationJSONObject?: UpsertAccount500ApplicationJson;
}
