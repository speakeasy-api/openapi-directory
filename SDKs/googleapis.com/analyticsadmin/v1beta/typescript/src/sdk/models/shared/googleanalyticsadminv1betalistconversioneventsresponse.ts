import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaConversionEvent } from "./googleanalyticsadminv1betaconversionevent";



// GoogleAnalyticsAdminV1betaListConversionEventsResponse
/** 
 * Response message for ListConversionEvents RPC.
**/
export class GoogleAnalyticsAdminV1betaListConversionEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversionEvents", elemType: GoogleAnalyticsAdminV1betaConversionEvent })
  conversionEvents?: GoogleAnalyticsAdminV1betaConversionEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
