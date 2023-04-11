import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account identification requires an accountId, domain or both
 */
export declare class UpsertAccountRequestBodyIdentification extends SpeakeasyBase {
    /**
     * Unique identifier for the account in your database
     */
    accountId?: string;
    /**
     * The domain associated with the account (e.g. acme-inc.com)
     */
    domain?: string;
}
/**
 * Update properties and/or members of an account
 */
export declare class UpsertAccountRequestBody extends SpeakeasyBase {
    /**
     * Account identification requires an accountId, domain or both
     */
    identification: UpsertAccountRequestBodyIdentification;
    /**
     * The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)
     */
    properties?: Record<string, any>;
}
export declare class UpsertAccount500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertAccount500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount500ApplicationJSONMeta;
}
export declare class UpsertAccount429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertAccount429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount429ApplicationJSONMeta;
}
export declare class UpsertAccount403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertAccount403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount403ApplicationJSONMeta;
}
export declare class UpsertAccount401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertAccount401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class UpsertAccount400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class UpsertAccount400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: UpsertAccount400ApplicationJSONErrorsParameters;
}
export declare class UpsertAccount400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertAccount400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: UpsertAccount400ApplicationJSONErrors;
    message: string;
    meta: UpsertAccount400ApplicationJSONMeta;
}
export declare class UpsertAccount201ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * Specifies if any warnings occurred when validating the properties
 */
export declare class UpsertAccount201ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertAccount201ApplicationJSONMeta;
    /**
     * If validation fails, specifies the property name and error message
     */
    rejected?: Record<string, string>;
}
export declare class UpsertAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account will be created
     */
    upsertAccount201ApplicationJSONObject?: UpsertAccount201ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    upsertAccount400ApplicationJSONObject?: UpsertAccount400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    upsertAccount401ApplicationJSONObject?: UpsertAccount401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    upsertAccount403ApplicationJSONObject?: UpsertAccount403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    upsertAccount429ApplicationJSONObject?: UpsertAccount429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    upsertAccount500ApplicationJSONObject?: UpsertAccount500ApplicationJSON;
}
