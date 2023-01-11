package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignManagerIds
 * Campaign Manager IDs related to the custom event.
**/
public class CampaignManagerIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adId")
    public String adId;
    public CampaignManagerIds withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public CampaignManagerIds withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public CampaignManagerIds withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CampaignManagerIds withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementId")
    public String placementId;
    public CampaignManagerIds withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;
    public CampaignManagerIds withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}