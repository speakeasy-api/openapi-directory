import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryEvent } from "./googleanalyticsadminv1betachangehistoryevent";
/**
 * Response message for SearchAccounts RPC.
**/
export declare class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse extends SpeakeasyBase {
    changeHistoryEvents?: GoogleAnalyticsAdminV1betaChangeHistoryEvent[];
    nextPageToken?: string;
}
