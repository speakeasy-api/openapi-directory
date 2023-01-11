package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItem
 * A single line item.
**/
public class LineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public LineItem withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidStrategy")
    public BiddingStrategy bidStrategy;
    public LineItem withBidStrategy(BiddingStrategy bidStrategy) {
        this.bidStrategy = bidStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public LineItemBudget budget;
    public LineItem withBudget(LineItemBudget budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public LineItem withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionCounting")
    public ConversionCountingConfig conversionCounting;
    public LineItem withConversionCounting(ConversionCountingConfig conversionCounting) {
        this.conversionCounting = conversionCounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeIds")
    public String[] creativeIds;
    public LineItem withCreativeIds(String[] creativeIds) {
        this.creativeIds = creativeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public LineItem withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public LineItemEntityStatusEnum entityStatus;
    public LineItem withEntityStatus(LineItemEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeNewExchanges")
    public Boolean excludeNewExchanges;
    public LineItem withExcludeNewExchanges(Boolean excludeNewExchanges) {
        this.excludeNewExchanges = excludeNewExchanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flight")
    public LineItemFlight flight;
    public LineItem withFlight(LineItemFlight flight) {
        this.flight = flight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap frequencyCap;
    public LineItem withFrequencyCap(FrequencyCap frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrderId")
    public String insertionOrderId;
    public LineItem withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationDetails")
    public IntegrationDetails integrationDetails;
    public LineItem withIntegrationDetails(IntegrationDetails integrationDetails) {
        this.integrationDetails = integrationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceIds")
    public String[] inventorySourceIds;
    public LineItem withInventorySourceIds(String[] inventorySourceIds) {
        this.inventorySourceIds = inventorySourceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public LineItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemType")
    public LineItemLineItemTypeEnum lineItemType;
    public LineItem withLineItemType(LineItemLineItemTypeEnum lineItemType) {
        this.lineItemType = lineItemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApp")
    public MobileApp mobileApp;
    public LineItem withMobileApp(MobileApp mobileApp) {
        this.mobileApp = mobileApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LineItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pacing")
    public Pacing pacing;
    public LineItem withPacing(Pacing pacing) {
        this.pacing = pacing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerCosts")
    public PartnerCost[] partnerCosts;
    public LineItem withPartnerCosts(PartnerCost[] partnerCosts) {
        this.partnerCosts = partnerCosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerRevenueModel")
    public PartnerRevenueModel partnerRevenueModel;
    public LineItem withPartnerRevenueModel(PartnerRevenueModel partnerRevenueModel) {
        this.partnerRevenueModel = partnerRevenueModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservationType")
    public LineItemReservationTypeEnum reservationType;
    public LineItem withReservationType(LineItemReservationTypeEnum reservationType) {
        this.reservationType = reservationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingExpansion")
    public TargetingExpansionConfig targetingExpansion;
    public LineItem withTargetingExpansion(TargetingExpansionConfig targetingExpansion) {
        this.targetingExpansion = targetingExpansion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public LineItem withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningMessages")
    public LineItemWarningMessagesEnum[] warningMessages;
    public LineItem withWarningMessages(LineItemWarningMessagesEnum[] warningMessages) {
        this.warningMessages = warningMessages;
        return this;
    }
}