import { SpeakeasyBase } from "../../../internal/utils";
/**
 * What needs to happen to resolve the issue.
 */
export declare enum IssueResolutionEnum {
    ResolutionUnspecified = "RESOLUTION_UNSPECIFIED",
    UserAction = "USER_ACTION",
    PendingProcessing = "PENDING_PROCESSING"
}
/**
 * The severity of the issue.
 */
export declare enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * Product issue.
 */
export declare class Issue extends SpeakeasyBase {
    /**
     * If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116.
     */
    attribute?: string;
    /**
     * Longer description of the issue focused on how to resolve it.
     */
    description?: string;
    /**
     * The destination this issue applies to.
     */
    destination?: string;
    /**
     * What needs to happen to resolve the issue.
     */
    resolution?: IssueResolutionEnum;
    /**
     * The severity of the issue.
     */
    severity?: IssueSeverityEnum;
    /**
     * The timestamp when this issue appeared.
     */
    timestamp?: string;
    /**
     * Short title describing the nature of the issue.
     */
    title?: string;
    /**
     * The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.
     */
    type?: string;
}
