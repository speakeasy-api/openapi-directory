package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsertionOrder
 * A single insertion order.
**/
public class InsertionOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public InsertionOrder withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidStrategy")
    public BiddingStrategy bidStrategy;
    public InsertionOrder withBidStrategy(BiddingStrategy bidStrategy) {
        this.bidStrategy = bidStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billableOutcome")
    public InsertionOrderBillableOutcomeEnum billableOutcome;
    public InsertionOrder withBillableOutcome(InsertionOrderBillableOutcomeEnum billableOutcome) {
        this.billableOutcome = billableOutcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public InsertionOrderBudget budget;
    public InsertionOrder withBudget(InsertionOrderBudget budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public InsertionOrder withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InsertionOrder withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public InsertionOrderEntityStatusEnum entityStatus;
    public InsertionOrder withEntityStatus(InsertionOrderEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap frequencyCap;
    public InsertionOrder withFrequencyCap(FrequencyCap frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrderId")
    public String insertionOrderId;
    public InsertionOrder withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrderType")
    public InsertionOrderInsertionOrderTypeEnum insertionOrderType;
    public InsertionOrder withInsertionOrderType(InsertionOrderInsertionOrderTypeEnum insertionOrderType) {
        this.insertionOrderType = insertionOrderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationDetails")
    public IntegrationDetails integrationDetails;
    public InsertionOrder withIntegrationDetails(IntegrationDetails integrationDetails) {
        this.integrationDetails = integrationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InsertionOrder withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pacing")
    public Pacing pacing;
    public InsertionOrder withPacing(Pacing pacing) {
        this.pacing = pacing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerCosts")
    public PartnerCost[] partnerCosts;
    public InsertionOrder withPartnerCosts(PartnerCost[] partnerCosts) {
        this.partnerCosts = partnerCosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoal")
    public PerformanceGoal performanceGoal;
    public InsertionOrder withPerformanceGoal(PerformanceGoal performanceGoal) {
        this.performanceGoal = performanceGoal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservationType")
    public InsertionOrderReservationTypeEnum reservationType;
    public InsertionOrder withReservationType(InsertionOrderReservationTypeEnum reservationType) {
        this.reservationType = reservationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public InsertionOrder withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}