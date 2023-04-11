import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlink";
/**
 * Response message for ListDisplayVideo360AdvertiserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse extends SpeakeasyBase {
    /**
     * List of DisplayVideo360AdvertiserLinks.
     */
    displayVideo360AdvertiserLinks?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
