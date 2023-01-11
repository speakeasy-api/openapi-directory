package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsertionOrderInput
 * A single insertion order.
**/
public class InsertionOrderInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidStrategy")
    public BiddingStrategy bidStrategy;
    public InsertionOrderInput withBidStrategy(BiddingStrategy bidStrategy) {
        this.bidStrategy = bidStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billableOutcome")
    public InsertionOrderBillableOutcomeEnum billableOutcome;
    public InsertionOrderInput withBillableOutcome(InsertionOrderBillableOutcomeEnum billableOutcome) {
        this.billableOutcome = billableOutcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public InsertionOrderBudget budget;
    public InsertionOrderInput withBudget(InsertionOrderBudget budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public InsertionOrderInput withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InsertionOrderInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public InsertionOrderEntityStatusEnum entityStatus;
    public InsertionOrderInput withEntityStatus(InsertionOrderEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap frequencyCap;
    public InsertionOrderInput withFrequencyCap(FrequencyCap frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrderType")
    public InsertionOrderInsertionOrderTypeEnum insertionOrderType;
    public InsertionOrderInput withInsertionOrderType(InsertionOrderInsertionOrderTypeEnum insertionOrderType) {
        this.insertionOrderType = insertionOrderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationDetails")
    public IntegrationDetails integrationDetails;
    public InsertionOrderInput withIntegrationDetails(IntegrationDetails integrationDetails) {
        this.integrationDetails = integrationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pacing")
    public Pacing pacing;
    public InsertionOrderInput withPacing(Pacing pacing) {
        this.pacing = pacing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerCosts")
    public PartnerCost[] partnerCosts;
    public InsertionOrderInput withPartnerCosts(PartnerCost[] partnerCosts) {
        this.partnerCosts = partnerCosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoal")
    public PerformanceGoal performanceGoal;
    public InsertionOrderInput withPerformanceGoal(PerformanceGoal performanceGoal) {
        this.performanceGoal = performanceGoal;
        return this;
    }
}