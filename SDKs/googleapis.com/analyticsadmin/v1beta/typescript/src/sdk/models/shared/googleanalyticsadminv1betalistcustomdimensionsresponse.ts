import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaCustomDimension } from "./googleanalyticsadminv1betacustomdimension";



// GoogleAnalyticsAdminV1betaListCustomDimensionsResponse
/** 
 * Response message for ListCustomDimensions RPC.
**/
export class GoogleAnalyticsAdminV1betaListCustomDimensionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customDimensions", elemType: GoogleAnalyticsAdminV1betaCustomDimension })
  customDimensions?: GoogleAnalyticsAdminV1betaCustomDimension[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
