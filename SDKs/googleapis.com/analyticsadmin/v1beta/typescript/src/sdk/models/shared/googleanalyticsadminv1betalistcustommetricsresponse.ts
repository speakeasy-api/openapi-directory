import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaCustomMetric } from "./googleanalyticsadminv1betacustommetric";



// GoogleAnalyticsAdminV1betaListCustomMetricsResponse
/** 
 * Response message for ListCustomMetrics RPC.
**/
export class GoogleAnalyticsAdminV1betaListCustomMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMetrics", elemType: GoogleAnalyticsAdminV1betaCustomMetric })
  customMetrics?: GoogleAnalyticsAdminV1betaCustomMetric[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
