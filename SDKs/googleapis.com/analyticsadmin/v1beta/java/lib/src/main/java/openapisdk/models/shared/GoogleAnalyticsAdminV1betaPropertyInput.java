package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaPropertyInput
 * A resource message representing a Google Analytics GA4 property.
**/
public class GoogleAnalyticsAdminV1betaPropertyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public GoogleAnalyticsAdminV1betaPropertyInput withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleAnalyticsAdminV1betaPropertyInput withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaPropertyInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industryCategory")
    public GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum industryCategory;
    public GoogleAnalyticsAdminV1betaPropertyInput withIndustryCategory(GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum industryCategory) {
        this.industryCategory = industryCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleAnalyticsAdminV1betaPropertyInput withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyType")
    public GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum propertyType;
    public GoogleAnalyticsAdminV1betaPropertyInput withPropertyType(GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum propertyType) {
        this.propertyType = propertyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public GoogleAnalyticsAdminV1betaPropertyInput withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}