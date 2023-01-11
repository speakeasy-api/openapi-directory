package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Campaign
 * A single campaign.
**/
public class Campaign {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Campaign withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignBudgets")
    public CampaignBudget[] campaignBudgets;
    public Campaign withCampaignBudgets(CampaignBudget[] campaignBudgets) {
        this.campaignBudgets = campaignBudgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignFlight")
    public CampaignFlight campaignFlight;
    public Campaign withCampaignFlight(CampaignFlight campaignFlight) {
        this.campaignFlight = campaignFlight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignGoal")
    public CampaignGoal campaignGoal;
    public Campaign withCampaignGoal(CampaignGoal campaignGoal) {
        this.campaignGoal = campaignGoal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public Campaign withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Campaign withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public CampaignEntityStatusEnum entityStatus;
    public Campaign withEntityStatus(CampaignEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap frequencyCap;
    public Campaign withFrequencyCap(FrequencyCap frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Campaign withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Campaign withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}