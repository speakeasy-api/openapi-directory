import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaProperty } from "./googleanalyticsadminv1betaproperty";



// GoogleAnalyticsAdminV1betaListPropertiesResponse
/** 
 * Response message for ListProperties RPC.
**/
export class GoogleAnalyticsAdminV1betaListPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleAnalyticsAdminV1betaProperty })
  properties?: GoogleAnalyticsAdminV1betaProperty[];
}
