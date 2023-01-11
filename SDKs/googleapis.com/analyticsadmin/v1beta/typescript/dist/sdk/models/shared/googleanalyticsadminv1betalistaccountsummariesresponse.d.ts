import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccountSummary } from "./googleanalyticsadminv1betaaccountsummary";
/**
 * Response message for ListAccountSummaries RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListAccountSummariesResponse extends SpeakeasyBase {
    accountSummaries?: GoogleAnalyticsAdminV1betaAccountSummary[];
    nextPageToken?: string;
}
