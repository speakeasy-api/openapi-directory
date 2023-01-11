import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest
/** 
 * Request message for AcknowledgeUserDataCollection RPC.
**/
export class GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement?: string;
}
