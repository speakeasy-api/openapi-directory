package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayAnalytics
 * Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
**/
public class GooglePlayAnalytics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gclid")
    public String gclid;
    public GooglePlayAnalytics withGclid(String gclid) {
        this.gclid = gclid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmCampaign")
    public String utmCampaign;
    public GooglePlayAnalytics withUtmCampaign(String utmCampaign) {
        this.utmCampaign = utmCampaign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmContent")
    public String utmContent;
    public GooglePlayAnalytics withUtmContent(String utmContent) {
        this.utmContent = utmContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmMedium")
    public String utmMedium;
    public GooglePlayAnalytics withUtmMedium(String utmMedium) {
        this.utmMedium = utmMedium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmSource")
    public String utmSource;
    public GooglePlayAnalytics withUtmSource(String utmSource) {
        this.utmSource = utmSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmTerm")
    public String utmTerm;
    public GooglePlayAnalytics withUtmTerm(String utmTerm) {
        this.utmTerm = utmTerm;
        return this;
    }
}