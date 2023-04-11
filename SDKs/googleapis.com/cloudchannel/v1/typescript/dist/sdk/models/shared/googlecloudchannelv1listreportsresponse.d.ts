import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Report } from "./googlecloudchannelv1report";
/**
 * Response message for CloudChannelReportsService.ListReports.
 */
export declare class GoogleCloudChannelV1ListReportsResponse extends SpeakeasyBase {
    /**
     * Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The reports available to the partner.
     */
    reports?: GoogleCloudChannelV1Report[];
}
