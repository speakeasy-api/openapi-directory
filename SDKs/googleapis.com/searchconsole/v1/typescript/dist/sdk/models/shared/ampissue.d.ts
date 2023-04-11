import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Severity of this issue: WARNING or ERROR.
 */
export declare enum AmpIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * AMP issue.
 */
export declare class AmpIssue extends SpeakeasyBase {
    /**
     * Brief description of this issue.
     */
    issueMessage?: string;
    /**
     * Severity of this issue: WARNING or ERROR.
     */
    severity?: AmpIssueSeverityEnum;
}
