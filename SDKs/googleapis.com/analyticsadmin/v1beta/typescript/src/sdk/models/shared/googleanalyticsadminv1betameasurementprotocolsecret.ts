import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaMeasurementProtocolSecret
/** 
 * A secret value used for sending hits to Measurement Protocol.
**/
export class GoogleAnalyticsAdminV1betaMeasurementProtocolSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secretValue" })
  secretValue?: string;
}


// GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput
/** 
 * A secret value used for sending hits to Measurement Protocol.
**/
export class GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
