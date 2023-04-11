import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the errors grouped in this issue.
 */
export declare enum GooglePlayDeveloperReportingV1beta1ErrorIssueTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED",
    ApplicationNotResponding = "APPLICATION_NOT_RESPONDING",
    Crash = "CRASH"
}
/**
 * A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
 */
export declare class GooglePlayDeveloperReportingV1beta1ErrorIssue extends SpeakeasyBase {
    /**
     * Cause of the issue. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the type of ANR that occurred, e.g., 'Input dispatching timed out'. * CRASH: for Java unhandled exception errors, the type of the innermost exception that was thrown, e.g., IllegalArgumentException. For signals in native code, the signal that was raised, e.g. SIGSEGV.
     */
    cause?: string;
    /**
     * Location where the issue happened. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the name of the activity or service that stopped responding. * CRASH: the likely method name that caused the error.
     */
    location?: string;
    /**
     * The resource name of the issue. Format: apps/{app}/errorIssues/{issue}
     */
    name?: string;
    /**
     * Type of the errors grouped in this issue.
     */
    type?: GooglePlayDeveloperReportingV1beta1ErrorIssueTypeEnum;
}
