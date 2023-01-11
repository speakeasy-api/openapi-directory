package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaCustomDimension
 * A definition for a CustomDimension.
**/
public class GoogleAnalyticsAdminV1betaCustomDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleAnalyticsAdminV1betaCustomDimension withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disallowAdsPersonalization")
    public Boolean disallowAdsPersonalization;
    public GoogleAnalyticsAdminV1betaCustomDimension withDisallowAdsPersonalization(Boolean disallowAdsPersonalization) {
        this.disallowAdsPersonalization = disallowAdsPersonalization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaCustomDimension withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaCustomDimension withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterName")
    public String parameterName;
    public GoogleAnalyticsAdminV1betaCustomDimension withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum scope;
    public GoogleAnalyticsAdminV1betaCustomDimension withScope(GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}