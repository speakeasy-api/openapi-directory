import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum {
    DimensionScopeUnspecified = "DIMENSION_SCOPE_UNSPECIFIED",
    Event = "EVENT",
    User = "USER"
}


// GoogleAnalyticsAdminV1betaCustomDimension
/** 
 * A definition for a CustomDimension.
**/
export class GoogleAnalyticsAdminV1betaCustomDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disallowAdsPersonalization" })
  disallowAdsPersonalization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum;
}


// GoogleAnalyticsAdminV1betaCustomDimensionInput
/** 
 * A definition for a CustomDimension.
**/
export class GoogleAnalyticsAdminV1betaCustomDimensionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disallowAdsPersonalization" })
  disallowAdsPersonalization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum;
}
