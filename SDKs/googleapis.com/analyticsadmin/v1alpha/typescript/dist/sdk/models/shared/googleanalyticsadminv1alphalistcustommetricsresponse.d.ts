import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCustomMetric } from "./googleanalyticsadminv1alphacustommetric";
/**
 * Response message for ListCustomMetrics RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListCustomMetricsResponse extends SpeakeasyBase {
    /**
     * List of CustomMetrics.
     */
    customMetrics?: GoogleAnalyticsAdminV1alphaCustomMetric[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
