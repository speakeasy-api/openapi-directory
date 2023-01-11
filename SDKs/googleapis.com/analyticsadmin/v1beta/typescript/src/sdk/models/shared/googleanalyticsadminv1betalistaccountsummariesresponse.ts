import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccountSummary } from "./googleanalyticsadminv1betaaccountsummary";



// GoogleAnalyticsAdminV1betaListAccountSummariesResponse
/** 
 * Response message for ListAccountSummaries RPC.
**/
export class GoogleAnalyticsAdminV1betaListAccountSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountSummaries", elemType: GoogleAnalyticsAdminV1betaAccountSummary })
  accountSummaries?: GoogleAnalyticsAdminV1betaAccountSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
