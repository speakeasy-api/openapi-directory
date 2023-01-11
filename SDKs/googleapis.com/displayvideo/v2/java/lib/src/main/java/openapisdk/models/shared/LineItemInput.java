package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemInput
 * A single line item.
**/
public class LineItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidStrategy")
    public BiddingStrategy bidStrategy;
    public LineItemInput withBidStrategy(BiddingStrategy bidStrategy) {
        this.bidStrategy = bidStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public LineItemBudgetInput budget;
    public LineItemInput withBudget(LineItemBudgetInput budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionCounting")
    public ConversionCountingConfig conversionCounting;
    public LineItemInput withConversionCounting(ConversionCountingConfig conversionCounting) {
        this.conversionCounting = conversionCounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeIds")
    public String[] creativeIds;
    public LineItemInput withCreativeIds(String[] creativeIds) {
        this.creativeIds = creativeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public LineItemInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public LineItemEntityStatusEnum entityStatus;
    public LineItemInput withEntityStatus(LineItemEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeNewExchanges")
    public Boolean excludeNewExchanges;
    public LineItemInput withExcludeNewExchanges(Boolean excludeNewExchanges) {
        this.excludeNewExchanges = excludeNewExchanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flight")
    public LineItemFlight flight;
    public LineItemInput withFlight(LineItemFlight flight) {
        this.flight = flight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap frequencyCap;
    public LineItemInput withFrequencyCap(FrequencyCap frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrderId")
    public String insertionOrderId;
    public LineItemInput withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationDetails")
    public IntegrationDetails integrationDetails;
    public LineItemInput withIntegrationDetails(IntegrationDetails integrationDetails) {
        this.integrationDetails = integrationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemType")
    public LineItemLineItemTypeEnum lineItemType;
    public LineItemInput withLineItemType(LineItemLineItemTypeEnum lineItemType) {
        this.lineItemType = lineItemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApp")
    public MobileAppInput mobileApp;
    public LineItemInput withMobileApp(MobileAppInput mobileApp) {
        this.mobileApp = mobileApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pacing")
    public Pacing pacing;
    public LineItemInput withPacing(Pacing pacing) {
        this.pacing = pacing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerCosts")
    public PartnerCost[] partnerCosts;
    public LineItemInput withPartnerCosts(PartnerCost[] partnerCosts) {
        this.partnerCosts = partnerCosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerRevenueModel")
    public PartnerRevenueModel partnerRevenueModel;
    public LineItemInput withPartnerRevenueModel(PartnerRevenueModel partnerRevenueModel) {
        this.partnerRevenueModel = partnerRevenueModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingExpansion")
    public TargetingExpansionConfig targetingExpansion;
    public LineItemInput withTargetingExpansion(TargetingExpansionConfig targetingExpansion) {
        this.targetingExpansion = targetingExpansion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeAndPartnersSettings")
    public YoutubeAndPartnersSettings youtubeAndPartnersSettings;
    public LineItemInput withYoutubeAndPartnersSettings(YoutubeAndPartnersSettings youtubeAndPartnersSettings) {
        this.youtubeAndPartnersSettings = youtubeAndPartnersSettings;
        return this;
    }
}