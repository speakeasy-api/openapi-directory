import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaMeasurementProtocolSecret } from "./googleanalyticsadminv1betameasurementprotocolsecret";



// GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse
/** 
 * Response message for ListMeasurementProtocolSecret RPC
**/
export class GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measurementProtocolSecrets", elemType: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret })
  measurementProtocolSecrets?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
