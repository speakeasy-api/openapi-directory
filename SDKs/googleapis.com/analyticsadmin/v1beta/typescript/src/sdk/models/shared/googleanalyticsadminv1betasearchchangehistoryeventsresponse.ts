import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryEvent } from "./googleanalyticsadminv1betachangehistoryevent";



// GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse
/** 
 * Response message for SearchAccounts RPC.
**/
export class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeHistoryEvents", elemType: GoogleAnalyticsAdminV1betaChangeHistoryEvent })
  changeHistoryEvents?: GoogleAnalyticsAdminV1betaChangeHistoryEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
