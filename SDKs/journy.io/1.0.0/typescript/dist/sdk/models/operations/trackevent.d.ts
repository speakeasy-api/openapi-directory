import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account identification requires an accountId, domain or both
 */
export declare class TrackEventRequestBodyIdentificationAccount extends SpeakeasyBase {
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
 * User identification requires a userId, email or both
 */
export declare class TrackEventRequestBodyIdentificationUser extends SpeakeasyBase {
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
 * Event identification requires a user, account or both
 */
export declare class TrackEventRequestBodyIdentification extends SpeakeasyBase {
    /**
     * Account identification requires an accountId, domain or both
     */
    account?: TrackEventRequestBodyIdentificationAccount;
    /**
     * User identification requires a userId, email or both
     */
    user?: TrackEventRequestBodyIdentificationUser;
}
/**
 * Event for a user or an account
 */
export declare class TrackEventRequestBody extends SpeakeasyBase {
    /**
     * Event identification requires a user, account or both
     */
    identification: TrackEventRequestBodyIdentification;
    /**
     * Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)
     */
    metadata?: Record<string, any>;
    name: string;
    /**
     * If left blank this defaults to the current datetime
     */
    triggeredAt?: string;
}
export declare class TrackEvent500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackEvent500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackEvent500ApplicationJSONMeta;
}
export declare class TrackEvent429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackEvent429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackEvent429ApplicationJSONMeta;
}
export declare class TrackEvent403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackEvent403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackEvent403ApplicationJSONMeta;
}
export declare class TrackEvent401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackEvent401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackEvent401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class TrackEvent400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class TrackEvent400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: TrackEvent400ApplicationJSONErrorsParameters;
}
export declare class TrackEvent400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackEvent400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: TrackEvent400ApplicationJSONErrors;
    message: string;
    meta: TrackEvent400ApplicationJSONMeta;
}
export declare class TrackEvent201ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackEvent201ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackEvent201ApplicationJSONMeta;
}
export declare class TrackEventResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object was created
     */
    trackEvent201ApplicationJSONObject?: TrackEvent201ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    trackEvent400ApplicationJSONObject?: TrackEvent400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    trackEvent401ApplicationJSONObject?: TrackEvent401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    trackEvent403ApplicationJSONObject?: TrackEvent403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    trackEvent429ApplicationJSONObject?: TrackEvent429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    trackEvent500ApplicationJSONObject?: TrackEvent500ApplicationJSON;
}
