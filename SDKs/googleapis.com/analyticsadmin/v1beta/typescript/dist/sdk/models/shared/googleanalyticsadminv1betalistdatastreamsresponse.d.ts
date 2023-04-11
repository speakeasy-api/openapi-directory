import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaDataStream } from "./googleanalyticsadminv1betadatastream";
/**
 * Response message for ListDataStreams RPC.
 */
export declare class GoogleAnalyticsAdminV1betaListDataStreamsResponse extends SpeakeasyBase {
    /**
     * List of DataStreams.
     */
    dataStreams?: GoogleAnalyticsAdminV1betaDataStream[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
