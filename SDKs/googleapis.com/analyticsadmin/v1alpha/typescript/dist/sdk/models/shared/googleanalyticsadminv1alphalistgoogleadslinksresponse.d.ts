import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaGoogleAdsLink } from "./googleanalyticsadminv1alphagoogleadslink";
/**
 * Response message for ListGoogleAdsLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse extends SpeakeasyBase {
    /**
     * List of GoogleAdsLinks.
     */
    googleAdsLinks?: GoogleAnalyticsAdminV1alphaGoogleAdsLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
