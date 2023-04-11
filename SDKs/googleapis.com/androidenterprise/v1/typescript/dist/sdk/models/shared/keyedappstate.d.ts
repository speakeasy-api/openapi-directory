import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Severity of the app state. This field will always be present.
 */
export declare enum KeyedAppStateSeverityEnum {
    SeverityUnknown = "severityUnknown",
    SeverityInfo = "severityInfo",
    SeverityError = "severityError"
}
/**
 * Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.
 */
export declare class KeyedAppState extends SpeakeasyBase {
    /**
     * Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it.
     */
    data?: string;
    /**
     * Key indicating what the app is providing a state for. The content of the key is set by the app's developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present.
     */
    key?: string;
    /**
     * Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it.
     */
    message?: string;
    /**
     * Severity of the app state. This field will always be present.
     */
    severity?: KeyedAppStateSeverityEnum;
    /**
     * Timestamp of when the app set the state in milliseconds since epoch. This field will always be present.
     */
    stateTimestampMillis?: string;
}
