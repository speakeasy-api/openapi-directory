import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccount } from "./googleanalyticsadminv1betaaccount";
/**
 * Request message for ListAccounts RPC.
**/
export declare class GoogleAnalyticsAdminV1betaListAccountsResponse extends SpeakeasyBase {
    accounts?: GoogleAnalyticsAdminV1betaAccount[];
    nextPageToken?: string;
}
