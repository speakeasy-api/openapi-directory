import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account identification requires an accountId, domain or both
 */
export declare class TrackJourneyEventRequestBodyIdentificationAccount extends SpeakeasyBase {
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
export declare class TrackJourneyEventRequestBodyIdentificationUser extends SpeakeasyBase {
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
export declare class TrackJourneyEventRequestBodyIdentification extends SpeakeasyBase {
    /**
     * Account identification requires an accountId, domain or both
     */
    account?: TrackJourneyEventRequestBodyIdentificationAccount;
    /**
     * User identification requires a userId, email or both
     */
    user?: TrackJourneyEventRequestBodyIdentificationUser;
}
/**
 * Event for a user or an account
 */
export declare class TrackJourneyEventRequestBody extends SpeakeasyBase {
    /**
     * Event identification requires a user, account or both
     */
    identification: TrackJourneyEventRequestBodyIdentification;
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
export declare class TrackJourneyEvent500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackJourneyEvent500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent500ApplicationJSONMeta;
}
export declare class TrackJourneyEvent429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackJourneyEvent429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent429ApplicationJSONMeta;
}
export declare class TrackJourneyEvent403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackJourneyEvent403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent403ApplicationJSONMeta;
}
export declare class TrackJourneyEvent401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackJourneyEvent401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class TrackJourneyEvent400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class TrackJourneyEvent400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: TrackJourneyEvent400ApplicationJSONErrorsParameters;
}
export declare class TrackJourneyEvent400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackJourneyEvent400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: TrackJourneyEvent400ApplicationJSONErrors;
    message: string;
    meta: TrackJourneyEvent400ApplicationJSONMeta;
}
export declare class TrackJourneyEvent201ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class TrackJourneyEvent201ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent201ApplicationJSONMeta;
}
export declare class TrackJourneyEventResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object was created
     */
    trackJourneyEvent201ApplicationJSONObject?: TrackJourneyEvent201ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    trackJourneyEvent400ApplicationJSONObject?: TrackJourneyEvent400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    trackJourneyEvent401ApplicationJSONObject?: TrackJourneyEvent401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    trackJourneyEvent403ApplicationJSONObject?: TrackJourneyEvent403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    trackJourneyEvent429ApplicationJSONObject?: TrackJourneyEvent429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    trackJourneyEvent500ApplicationJSONObject?: TrackJourneyEvent500ApplicationJSON;
}
