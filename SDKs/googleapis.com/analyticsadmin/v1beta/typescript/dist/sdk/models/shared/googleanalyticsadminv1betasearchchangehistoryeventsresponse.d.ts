import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryEvent } from "./googleanalyticsadminv1betachangehistoryevent";
/**
 * Response message for SearchAccounts RPC.
 */
export declare class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse extends SpeakeasyBase {
    /**
     * Results that were accessible to the caller.
     */
    changeHistoryEvents?: GoogleAnalyticsAdminV1betaChangeHistoryEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
