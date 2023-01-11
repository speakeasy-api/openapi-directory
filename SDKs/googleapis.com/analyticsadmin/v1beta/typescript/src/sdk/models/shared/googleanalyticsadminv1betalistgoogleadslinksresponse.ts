import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaGoogleAdsLink } from "./googleanalyticsadminv1betagoogleadslink";



// GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse
/** 
 * Response message for ListGoogleAdsLinks RPC.
**/
export class GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleAdsLinks", elemType: GoogleAnalyticsAdminV1betaGoogleAdsLink })
  googleAdsLinks?: GoogleAnalyticsAdminV1betaGoogleAdsLink[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
