import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountStatusAccountLevelIssue extends SpeakeasyBase {
    /**
     * Country for which this issue is reported.
     */
    country?: string;
    /**
     * The destination the issue applies to. If this field is empty then the issue applies to all available destinations.
     */
    destination?: string;
    /**
     * Additional details about the issue.
     */
    detail?: string;
    /**
     * The URL of a web page to help resolving this issue.
     */
    documentation?: string;
    /**
     * Issue identifier.
     */
    id?: string;
    /**
     * Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`"
     */
    severity?: string;
    /**
     * Short description of the issue.
     */
    title?: string;
}
