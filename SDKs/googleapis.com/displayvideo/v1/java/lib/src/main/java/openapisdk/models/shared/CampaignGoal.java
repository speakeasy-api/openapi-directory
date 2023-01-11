package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignGoal
 * Settings that control the goal of a campaign.
**/
public class CampaignGoal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignGoalType")
    public CampaignGoalCampaignGoalTypeEnum campaignGoalType;
    public CampaignGoal withCampaignGoalType(CampaignGoalCampaignGoalTypeEnum campaignGoalType) {
        this.campaignGoalType = campaignGoalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoal")
    public PerformanceGoal performanceGoal;
    public CampaignGoal withPerformanceGoal(PerformanceGoal performanceGoal) {
        this.performanceGoal = performanceGoal;
        return this;
    }
}