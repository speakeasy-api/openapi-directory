import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaCustomMetric } from "./googleanalyticsadminv1betacustommetric";
/**
 * Response message for ListCustomMetrics RPC.
 */
export declare class GoogleAnalyticsAdminV1betaListCustomMetricsResponse extends SpeakeasyBase {
    /**
     * List of CustomMetrics.
     */
    customMetrics?: GoogleAnalyticsAdminV1betaCustomMetric[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
