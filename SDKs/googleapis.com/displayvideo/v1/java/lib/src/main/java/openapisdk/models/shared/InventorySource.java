package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySource
 * An inventory source.
**/
public class InventorySource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitment")
    public InventorySourceCommitmentEnum commitment;
    public InventorySource withCommitment(InventorySourceCommitmentEnum commitment) {
        this.commitment = commitment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeConfigs")
    public CreativeConfig[] creativeConfigs;
    public InventorySource withCreativeConfigs(CreativeConfig[] creativeConfigs) {
        this.creativeConfigs = creativeConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealId")
    public String dealId;
    public InventorySource withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryMethod")
    public InventorySourceDeliveryMethodEnum deliveryMethod;
    public InventorySource withDeliveryMethod(InventorySourceDeliveryMethodEnum deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InventorySource withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public InventorySourceExchangeEnum exchange;
    public InventorySource withExchange(InventorySourceExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedOrderId")
    public String guaranteedOrderId;
    public InventorySource withGuaranteedOrderId(String guaranteedOrderId) {
        this.guaranteedOrderId = guaranteedOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceId")
    public String inventorySourceId;
    public InventorySource withInventorySourceId(String inventorySourceId) {
        this.inventorySourceId = inventorySourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceProductType")
    public InventorySourceInventorySourceProductTypeEnum inventorySourceProductType;
    public InventorySource withInventorySourceProductType(InventorySourceInventorySourceProductTypeEnum inventorySourceProductType) {
        this.inventorySourceProductType = inventorySourceProductType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceType")
    public InventorySourceInventorySourceTypeEnum inventorySourceType;
    public InventorySource withInventorySourceType(InventorySourceInventorySourceTypeEnum inventorySourceType) {
        this.inventorySourceType = inventorySourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InventorySource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherName")
    public String publisherName;
    public InventorySource withPublisherName(String publisherName) {
        this.publisherName = publisherName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateDetails")
    public RateDetails rateDetails;
    public InventorySource withRateDetails(RateDetails rateDetails) {
        this.rateDetails = rateDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAdvertiserIds")
    public String[] readAdvertiserIds;
    public InventorySource withReadAdvertiserIds(String[] readAdvertiserIds) {
        this.readAdvertiserIds = readAdvertiserIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readPartnerIds")
    public String[] readPartnerIds;
    public InventorySource withReadPartnerIds(String[] readPartnerIds) {
        this.readPartnerIds = readPartnerIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readWriteAccessors")
    public InventorySourceAccessors readWriteAccessors;
    public InventorySource withReadWriteAccessors(InventorySourceAccessors readWriteAccessors) {
        this.readWriteAccessors = readWriteAccessors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public InventorySourceStatus status;
    public InventorySource withStatus(InventorySourceStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subSitePropertyId")
    public String subSitePropertyId;
    public InventorySource withSubSitePropertyId(String subSitePropertyId) {
        this.subSitePropertyId = subSitePropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public TimeRange timeRange;
    public InventorySource withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public InventorySource withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}