import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaConversionEvent
/** 
 * A conversion event in a Google Analytics property.
**/
export class GoogleAnalyticsAdminV1betaConversionEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletable" })
  deletable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleAnalyticsAdminV1betaConversionEventInput
/** 
 * A conversion event in a Google Analytics property.
**/
export class GoogleAnalyticsAdminV1betaConversionEventInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;
}
