import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Immutable. The scope of this dimension.
 */
export declare enum GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum {
    DimensionScopeUnspecified = "DIMENSION_SCOPE_UNSPECIFIED",
    Event = "EVENT",
    User = "USER"
}
/**
 * A definition for a CustomDimension.
 */
export declare class GoogleAnalyticsAdminV1alphaCustomDimension extends SpeakeasyBase {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string;
    /**
     * Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.
     */
    disallowAdsPersonalization?: boolean;
    /**
     * Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string;
    /**
     * Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension}
     */
    name?: string;
    /**
     * Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.
     */
    parameterName?: string;
    /**
     * Required. Immutable. The scope of this dimension.
     */
    scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
}
/**
 * A definition for a CustomDimension.
 */
export declare class GoogleAnalyticsAdminV1alphaCustomDimensionInput extends SpeakeasyBase {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string;
    /**
     * Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.
     */
    disallowAdsPersonalization?: boolean;
    /**
     * Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string;
    /**
     * Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.
     */
    parameterName?: string;
    /**
     * Required. Immutable. The scope of this dimension.
     */
    scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
}
