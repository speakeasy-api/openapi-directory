package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceInput
 * An inventory source.
**/
public class InventorySourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitment")
    public InventorySourceCommitmentEnum commitment;
    public InventorySourceInput withCommitment(InventorySourceCommitmentEnum commitment) {
        this.commitment = commitment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeConfigs")
    public CreativeConfig[] creativeConfigs;
    public InventorySourceInput withCreativeConfigs(CreativeConfig[] creativeConfigs) {
        this.creativeConfigs = creativeConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealId")
    public String dealId;
    public InventorySourceInput withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryMethod")
    public InventorySourceDeliveryMethodEnum deliveryMethod;
    public InventorySourceInput withDeliveryMethod(InventorySourceDeliveryMethodEnum deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InventorySourceInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public InventorySourceExchangeEnum exchange;
    public InventorySourceInput withExchange(InventorySourceExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedOrderId")
    public String guaranteedOrderId;
    public InventorySourceInput withGuaranteedOrderId(String guaranteedOrderId) {
        this.guaranteedOrderId = guaranteedOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceType")
    public InventorySourceInventorySourceTypeEnum inventorySourceType;
    public InventorySourceInput withInventorySourceType(InventorySourceInventorySourceTypeEnum inventorySourceType) {
        this.inventorySourceType = inventorySourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherName")
    public String publisherName;
    public InventorySourceInput withPublisherName(String publisherName) {
        this.publisherName = publisherName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateDetails")
    public RateDetails rateDetails;
    public InventorySourceInput withRateDetails(RateDetails rateDetails) {
        this.rateDetails = rateDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readWriteAccessors")
    public InventorySourceAccessors readWriteAccessors;
    public InventorySourceInput withReadWriteAccessors(InventorySourceAccessors readWriteAccessors) {
        this.readWriteAccessors = readWriteAccessors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public InventorySourceStatusInput status;
    public InventorySourceInput withStatus(InventorySourceStatusInput status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subSitePropertyId")
    public String subSitePropertyId;
    public InventorySourceInput withSubSitePropertyId(String subSitePropertyId) {
        this.subSitePropertyId = subSitePropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public TimeRange timeRange;
    public InventorySourceInput withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}