import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaGoogleAdsLink } from "./googleanalyticsadminv1betagoogleadslink";
/**
 * Response message for ListGoogleAdsLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse extends SpeakeasyBase {
    /**
     * List of GoogleAdsLinks.
     */
    googleAdsLinks?: GoogleAnalyticsAdminV1betaGoogleAdsLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
