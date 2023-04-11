import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaSearchAds360Link } from "./googleanalyticsadminv1alphasearchads360link";
/**
 * Response message for ListSearchAds360Links RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of SearchAds360Links.
     */
    searchAds360Links?: GoogleAnalyticsAdminV1alphaSearchAds360Link[];
}
