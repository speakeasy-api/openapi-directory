import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum {
    DimensionScopeUnspecified = "DIMENSION_SCOPE_UNSPECIFIED",
    Event = "EVENT",
    User = "USER"
}
/**
 * A definition for a CustomDimension.
**/
export declare class GoogleAnalyticsAdminV1betaCustomDimension extends SpeakeasyBase {
    description?: string;
    disallowAdsPersonalization?: boolean;
    displayName?: string;
    name?: string;
    parameterName?: string;
    scope?: GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum;
}
/**
 * A definition for a CustomDimension.
**/
export declare class GoogleAnalyticsAdminV1betaCustomDimensionInput extends SpeakeasyBase {
    description?: string;
    disallowAdsPersonalization?: boolean;
    displayName?: string;
    parameterName?: string;
    scope?: GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum;
}
