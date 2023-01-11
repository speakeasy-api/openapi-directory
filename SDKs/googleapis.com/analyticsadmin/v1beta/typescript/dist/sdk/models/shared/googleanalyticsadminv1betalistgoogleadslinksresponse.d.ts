import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaGoogleAdsLink } from "./googleanalyticsadminv1betagoogleadslink";
/**
 * Response message for ListGoogleAdsLinks RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse extends SpeakeasyBase {
    googleAdsLinks?: GoogleAnalyticsAdminV1betaGoogleAdsLink[];
    nextPageToken?: string;
}
