import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results.
 */
export declare enum RichResultsIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Severity and status of a single issue affecting a single rich result instance on a page.
 */
export declare class RichResultsIssue extends SpeakeasyBase {
    /**
     * Rich Results issue type.
     */
    issueMessage?: string;
    /**
     * Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results.
     */
    severity?: RichResultsIssueSeverityEnum;
}
