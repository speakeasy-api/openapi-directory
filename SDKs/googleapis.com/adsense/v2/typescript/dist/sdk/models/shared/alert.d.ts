import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Severity of this alert.
 */
export declare enum AlertSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Severe = "SEVERE"
}
/**
 * Representation of an alert.
 */
export declare class Alert extends SpeakeasyBase {
    /**
     * Output only. The localized alert message. This may contain HTML markup, such as phrase elements or links.
     */
    message?: string;
    /**
     * Output only. Resource name of the alert. Format: accounts/{account}/alerts/{alert}
     */
    name?: string;
    /**
     * Output only. Severity of this alert.
     */
    severity?: AlertSeverityEnum;
    /**
     * Output only. Type of alert. This identifies the broad type of this alert, and provides a stable machine-readable identifier that will not be translated. For example, "payment-hold".
     */
    type?: string;
}
