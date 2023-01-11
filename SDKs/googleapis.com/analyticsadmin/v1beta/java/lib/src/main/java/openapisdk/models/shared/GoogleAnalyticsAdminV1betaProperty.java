package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaProperty
 * A resource message representing a Google Analytics GA4 property.
**/
public class GoogleAnalyticsAdminV1betaProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public GoogleAnalyticsAdminV1betaProperty withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAnalyticsAdminV1betaProperty withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleAnalyticsAdminV1betaProperty withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public GoogleAnalyticsAdminV1betaProperty withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaProperty withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleAnalyticsAdminV1betaProperty withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industryCategory")
    public GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum industryCategory;
    public GoogleAnalyticsAdminV1betaProperty withIndustryCategory(GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum industryCategory) {
        this.industryCategory = industryCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaProperty withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleAnalyticsAdminV1betaProperty withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyType")
    public GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum propertyType;
    public GoogleAnalyticsAdminV1betaProperty withPropertyType(GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum propertyType) {
        this.propertyType = propertyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceLevel")
    public GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum serviceLevel;
    public GoogleAnalyticsAdminV1betaProperty withServiceLevel(GoogleAnalyticsAdminV1betaPropertyServiceLevelEnum serviceLevel) {
        this.serviceLevel = serviceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public GoogleAnalyticsAdminV1betaProperty withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleAnalyticsAdminV1betaProperty withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}