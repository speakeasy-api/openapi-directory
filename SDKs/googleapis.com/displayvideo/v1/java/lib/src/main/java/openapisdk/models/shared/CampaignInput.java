package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignInput
 * A single campaign.
**/
public class CampaignInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignBudgets")
    public CampaignBudget[] campaignBudgets;
    public CampaignInput withCampaignBudgets(CampaignBudget[] campaignBudgets) {
        this.campaignBudgets = campaignBudgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignFlight")
    public CampaignFlight campaignFlight;
    public CampaignInput withCampaignFlight(CampaignFlight campaignFlight) {
        this.campaignFlight = campaignFlight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignGoal")
    public CampaignGoal campaignGoal;
    public CampaignInput withCampaignGoal(CampaignGoal campaignGoal) {
        this.campaignGoal = campaignGoal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CampaignInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public CampaignEntityStatusEnum entityStatus;
    public CampaignInput withEntityStatus(CampaignEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap frequencyCap;
    public CampaignInput withFrequencyCap(FrequencyCap frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
}