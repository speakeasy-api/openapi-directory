import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccount } from "./googleanalyticsadminv1betaaccount";
/**
 * Request message for ListAccounts RPC.
 */
export declare class GoogleAnalyticsAdminV1betaListAccountsResponse extends SpeakeasyBase {
    /**
     * Results that were accessible to the caller.
     */
    accounts?: GoogleAnalyticsAdminV1betaAccount[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
