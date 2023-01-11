import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaDataStreamWebStreamData
/** 
 * Data specific to web streams.
**/
export class GoogleAnalyticsAdminV1betaDataStreamWebStreamData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultUri" })
  defaultUri?: string;

  @SpeakeasyMetadata({ data: "json, name=firebaseAppId" })
  firebaseAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementId" })
  measurementId?: string;
}


// GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput
/** 
 * Data specific to web streams.
**/
export class GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultUri" })
  defaultUri?: string;
}
