import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaChangeHistoryEvent } from "./googleanalyticsadminv1alphachangehistoryevent";
/**
 * Response message for SearchAccounts RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse extends SpeakeasyBase {
    /**
     * Results that were accessible to the caller.
     */
    changeHistoryEvents?: GoogleAnalyticsAdminV1alphaChangeHistoryEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
