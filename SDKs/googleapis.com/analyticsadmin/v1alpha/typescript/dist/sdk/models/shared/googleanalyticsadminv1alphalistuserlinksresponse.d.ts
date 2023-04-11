import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";
/**
 * Response message for ListUserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListUserLinksResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of UserLinks. These will be ordered stably, but in an arbitrary order.
     */
    userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
