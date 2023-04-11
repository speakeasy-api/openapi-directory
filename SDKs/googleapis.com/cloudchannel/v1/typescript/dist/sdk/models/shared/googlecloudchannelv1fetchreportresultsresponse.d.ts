import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ReportResultsMetadata } from "./googlecloudchannelv1reportresultsmetadata";
import { GoogleCloudChannelV1Row } from "./googlecloudchannelv1row";
/**
 * Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.
 */
export declare class GoogleCloudChannelV1FetchReportResultsResponse extends SpeakeasyBase {
    /**
     * Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
     */
    reportMetadata?: GoogleCloudChannelV1ReportResultsMetadata;
    /**
     * The report's lists of values. Each row follows the settings and ordering of the columns from `report_metadata`.
     */
    rows?: GoogleCloudChannelV1Row[];
}
