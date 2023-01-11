import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccount } from "./googleanalyticsadminv1betaaccount";



// GoogleAnalyticsAdminV1betaListAccountsResponse
/** 
 * Request message for ListAccounts RPC.
**/
export class GoogleAnalyticsAdminV1betaListAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GoogleAnalyticsAdminV1betaAccount })
  accounts?: GoogleAnalyticsAdminV1betaAccount[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
