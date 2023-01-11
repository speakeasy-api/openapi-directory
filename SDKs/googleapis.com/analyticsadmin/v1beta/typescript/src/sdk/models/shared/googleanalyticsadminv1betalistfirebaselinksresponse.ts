import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaFirebaseLink } from "./googleanalyticsadminv1betafirebaselink";



// GoogleAnalyticsAdminV1betaListFirebaseLinksResponse
/** 
 * Response message for ListFirebaseLinks RPC
**/
export class GoogleAnalyticsAdminV1betaListFirebaseLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firebaseLinks", elemType: GoogleAnalyticsAdminV1betaFirebaseLink })
  firebaseLinks?: GoogleAnalyticsAdminV1betaFirebaseLink[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
