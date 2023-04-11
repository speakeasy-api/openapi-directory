import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1DateRange } from "./googlecloudchannelv1daterange";
import { GoogleCloudChannelV1Report } from "./googlecloudchannelv1report";
/**
 * The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
 */
export declare class GoogleCloudChannelV1ReportResultsMetadata extends SpeakeasyBase {
    /**
     * A representation of usage or invoice date ranges.
     */
    dateRange?: GoogleCloudChannelV1DateRange;
    /**
     * A representation of usage or invoice date ranges.
     */
    precedingDateRange?: GoogleCloudChannelV1DateRange;
    /**
     * The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.
     */
    report?: GoogleCloudChannelV1Report;
    /**
     * The total number of rows of data in the final report.
     */
    rowCount?: string;
}
