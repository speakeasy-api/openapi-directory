import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the error for which this report was generated.
 */
export declare enum GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED",
    ApplicationNotResponding = "APPLICATION_NOT_RESPONDING",
    Crash = "CRASH"
}
/**
 * An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
 */
export declare class GooglePlayDeveloperReportingV1alpha1ErrorReport extends SpeakeasyBase {
    /**
     * The issue this report was associated with. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to a different issue.
     */
    issue?: string;
    /**
     * The resource name of the report. Format: apps/{app}/errorReports/{report}
     */
    name?: string;
    /**
     * Textual representation of the error report. These textual reports are produced by the platform. The reports are then sanitized and filtered to remove any potentially sensitive information. Although their format is fairly stable, they are not entirely meant for machine consumption and we cannot guarantee that there won't be subtle changes to the formatting that may break systems trying to parse information out of the reports.
     */
    reportText?: string;
    /**
     * Type of the error for which this report was generated.
     */
    type?: GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum;
}
