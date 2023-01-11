package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaPropertySummary
 * A virtual resource representing metadata for a GA4 property.
**/
public class GoogleAnalyticsAdminV1betaPropertySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaPropertySummary withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleAnalyticsAdminV1betaPropertySummary withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public String property;
    public GoogleAnalyticsAdminV1betaPropertySummary withProperty(String property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyType")
    public GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum propertyType;
    public GoogleAnalyticsAdminV1betaPropertySummary withPropertyType(GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum propertyType) {
        this.propertyType = propertyType;
        return this;
    }
}