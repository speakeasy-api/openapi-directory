import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User identification requires a userId, email or both
 */
export declare class UpsertUserRequestBodyIdentification extends SpeakeasyBase {
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * Unique identifier for the user in your database
     */
    userId?: string;
}
/**
 * Update properties of a user
 */
export declare class UpsertUserRequestBody extends SpeakeasyBase {
    /**
     * User identification requires a userId, email or both
     */
    identification: UpsertUserRequestBodyIdentification;
    /**
     * The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)
     */
    properties?: Record<string, any>;
}
export declare class UpsertUser500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertUser500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertUser500ApplicationJSONMeta;
}
export declare class UpsertUser429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertUser429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertUser429ApplicationJSONMeta;
}
export declare class UpsertUser403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertUser403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertUser403ApplicationJSONMeta;
}
export declare class UpsertUser401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertUser401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertUser401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class UpsertUser400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class UpsertUser400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: UpsertUser400ApplicationJSONErrorsParameters;
}
export declare class UpsertUser400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class UpsertUser400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: UpsertUser400ApplicationJSONErrors;
    message: string;
    meta: UpsertUser400ApplicationJSONMeta;
}
export declare class UpsertUser201ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * Specifies if any warnings occurred when validating the properties
 */
export declare class UpsertUser201ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: UpsertUser201ApplicationJSONMeta;
    /**
     * If validation fails, specifies property name and error description
     */
    rejected?: Record<string, string>;
}
export declare class UpsertUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User will be created
     */
    upsertUser201ApplicationJSONObject?: UpsertUser201ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    upsertUser400ApplicationJSONObject?: UpsertUser400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    upsertUser401ApplicationJSONObject?: UpsertUser401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    upsertUser403ApplicationJSONObject?: UpsertUser403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    upsertUser429ApplicationJSONObject?: UpsertUser429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    upsertUser500ApplicationJSONObject?: UpsertUser500ApplicationJSON;
}
