import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";
/**
 * Request message for ListAccounts RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListAccountsResponse extends SpeakeasyBase {
    /**
     * Results that were accessible to the caller.
     */
    accounts?: GoogleAnalyticsAdminV1alphaAccount[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
