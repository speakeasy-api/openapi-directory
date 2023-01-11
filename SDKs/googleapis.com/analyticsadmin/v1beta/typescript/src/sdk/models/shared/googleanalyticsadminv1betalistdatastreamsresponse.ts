import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaDataStream } from "./googleanalyticsadminv1betadatastream";



// GoogleAnalyticsAdminV1betaListDataStreamsResponse
/** 
 * Response message for ListDataStreams RPC.
**/
export class GoogleAnalyticsAdminV1betaListDataStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataStreams", elemType: GoogleAnalyticsAdminV1betaDataStream })
  dataStreams?: GoogleAnalyticsAdminV1betaDataStream[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
