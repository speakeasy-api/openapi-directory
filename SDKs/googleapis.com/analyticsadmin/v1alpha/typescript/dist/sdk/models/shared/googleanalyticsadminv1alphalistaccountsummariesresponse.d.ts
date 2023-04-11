import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccountSummary } from "./googleanalyticsadminv1alphaaccountsummary";
/**
 * Response message for ListAccountSummaries RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListAccountSummariesResponse extends SpeakeasyBase {
    /**
     * Account summaries of all accounts the caller has access to.
     */
    accountSummaries?: GoogleAnalyticsAdminV1alphaAccountSummary[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
