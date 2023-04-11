import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDataStream } from "./googleanalyticsadminv1alphadatastream";
/**
 * Response message for ListDataStreams RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListDataStreamsResponse extends SpeakeasyBase {
    /**
     * List of DataStreams.
     */
    dataStreams?: GoogleAnalyticsAdminV1alphaDataStream[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
