package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaGoogleAdsLinkInput
 * A link between a GA4 property and a Google Ads account.
**/
public class GoogleAnalyticsAdminV1betaGoogleAdsLinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adsPersonalizationEnabled")
    public Boolean adsPersonalizationEnabled;
    public GoogleAnalyticsAdminV1betaGoogleAdsLinkInput withAdsPersonalizationEnabled(Boolean adsPersonalizationEnabled) {
        this.adsPersonalizationEnabled = adsPersonalizationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public GoogleAnalyticsAdminV1betaGoogleAdsLinkInput withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}