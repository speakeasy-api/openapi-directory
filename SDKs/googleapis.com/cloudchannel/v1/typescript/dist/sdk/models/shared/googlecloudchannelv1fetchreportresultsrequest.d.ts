import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for CloudChannelReportsService.FetchReportResults.
 */
export declare class GoogleCloudChannelV1FetchReportResultsRequest extends SpeakeasyBase {
    /**
     * Optional. Requested page size of the report. The server may return fewer results than requested. If you don't specify a page size, the server uses a sensible default (may change over time). The maximum value is 30,000; the server will change larger values to 30,000.
     */
    pageSize?: number;
    /**
     * Optional. A token that specifies a page of results beyond the first page. Obtained through FetchReportResultsResponse.next_page_token of the previous CloudChannelReportsService.FetchReportResults call.
     */
    pageToken?: string;
}
