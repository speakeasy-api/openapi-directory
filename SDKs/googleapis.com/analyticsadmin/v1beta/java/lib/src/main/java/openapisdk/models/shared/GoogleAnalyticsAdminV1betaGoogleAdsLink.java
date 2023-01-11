package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaGoogleAdsLink
 * A link between a GA4 property and a Google Ads account.
**/
public class GoogleAnalyticsAdminV1betaGoogleAdsLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adsPersonalizationEnabled")
    public Boolean adsPersonalizationEnabled;
    public GoogleAnalyticsAdminV1betaGoogleAdsLink withAdsPersonalizationEnabled(Boolean adsPersonalizationEnabled) {
        this.adsPersonalizationEnabled = adsPersonalizationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canManageClients")
    public Boolean canManageClients;
    public GoogleAnalyticsAdminV1betaGoogleAdsLink withCanManageClients(Boolean canManageClients) {
        this.canManageClients = canManageClients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAnalyticsAdminV1betaGoogleAdsLink withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorEmailAddress")
    public String creatorEmailAddress;
    public GoogleAnalyticsAdminV1betaGoogleAdsLink withCreatorEmailAddress(String creatorEmailAddress) {
        this.creatorEmailAddress = creatorEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public GoogleAnalyticsAdminV1betaGoogleAdsLink withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaGoogleAdsLink withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleAnalyticsAdminV1betaGoogleAdsLink withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}