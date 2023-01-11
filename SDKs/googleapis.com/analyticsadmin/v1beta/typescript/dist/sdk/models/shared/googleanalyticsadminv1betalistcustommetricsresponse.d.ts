import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaCustomMetric } from "./googleanalyticsadminv1betacustommetric";
/**
 * Response message for ListCustomMetrics RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListCustomMetricsResponse extends SpeakeasyBase {
    customMetrics?: GoogleAnalyticsAdminV1betaCustomMetric[];
    nextPageToken?: string;
}
