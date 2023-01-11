import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Account identification requires an accountId, domain or both
**/
export declare class TrackJourneyEventRequestBodyIdentificationAccount extends SpeakeasyBase {
    accountId?: string;
    domain?: string;
}
/**
 * User identification requires a userId, email or both
**/
export declare class TrackJourneyEventRequestBodyIdentificationUser extends SpeakeasyBase {
    email?: string;
    userId?: string;
}
/**
 * Event identification requires a user, account or both
**/
export declare class TrackJourneyEventRequestBodyIdentification extends SpeakeasyBase {
    account?: TrackJourneyEventRequestBodyIdentificationAccount;
    user?: TrackJourneyEventRequestBodyIdentificationUser;
}
/**
 * Event for a user or an account
**/
export declare class TrackJourneyEventRequestBody extends SpeakeasyBase {
    identification: TrackJourneyEventRequestBodyIdentification;
    metadata?: Record<string, any>;
    name: string;
    triggeredAt?: string;
}
export declare class TrackJourneyEvent201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The object was created
**/
export declare class TrackJourneyEvent201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class TrackJourneyEvent400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class TrackJourneyEvent400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Record<string, string>;
    parameters?: TrackJourneyEvent400ApplicationJsonErrorsParameters;
}
export declare class TrackJourneyEvent400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * Specify the fields and/ or parameters that had errors
**/
export declare class TrackJourneyEvent400ApplicationJson extends SpeakeasyBase {
    errors: TrackJourneyEvent400ApplicationJsonErrors;
    message: string;
    meta: TrackJourneyEvent400ApplicationJsonMeta;
}
export declare class TrackJourneyEvent401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class TrackJourneyEvent401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent401ApplicationJsonMeta;
}
export declare class TrackJourneyEvent403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class TrackJourneyEvent403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent403ApplicationJsonMeta;
}
export declare class TrackJourneyEvent429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class TrackJourneyEvent429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent429ApplicationJsonMeta;
}
export declare class TrackJourneyEvent500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The error message should specify what cause the error
**/
export declare class TrackJourneyEvent500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent500ApplicationJsonMeta;
}
export declare class TrackJourneyEventRequest extends SpeakeasyBase {
    request: TrackJourneyEventRequestBody;
}
export declare class TrackJourneyEventResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    trackJourneyEvent201ApplicationJSONObject?: TrackJourneyEvent201ApplicationJson;
    trackJourneyEvent400ApplicationJSONObject?: TrackJourneyEvent400ApplicationJson;
    trackJourneyEvent401ApplicationJSONObject?: TrackJourneyEvent401ApplicationJson;
    trackJourneyEvent403ApplicationJSONObject?: TrackJourneyEvent403ApplicationJson;
    trackJourneyEvent429ApplicationJSONObject?: TrackJourneyEvent429ApplicationJson;
    trackJourneyEvent500ApplicationJSONObject?: TrackJourneyEvent500ApplicationJson;
}
