import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The severity of the app state.
 */
export declare enum KeyedAppStateSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Error = "ERROR"
}
/**
 * Keyed app state reported by the app.
 */
export declare class KeyedAppState extends SpeakeasyBase {
    /**
     * The creation time of the app state on the device.
     */
    createTime?: string;
    /**
     * Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”).
     */
    data?: string;
    /**
     * The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key.
     */
    key?: string;
    /**
     * The time the app state was most recently updated.
     */
    lastUpdateTime?: string;
    /**
     * Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message.
     */
    message?: string;
    /**
     * The severity of the app state.
     */
    severity?: KeyedAppStateSeverityEnum;
}
