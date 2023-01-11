package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryItem
 * Represents a buy from the Planning inventory store.
**/
public class InventoryItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public InventoryItem withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adSlots")
    public AdSlot[] adSlots;
    public InventoryItem withAdSlots(AdSlot[] adSlots) {
        this.adSlots = adSlots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public InventoryItem withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategoryId")
    public String contentCategoryId;
    public InventoryItem withContentCategoryId(String contentCategoryId) {
        this.contentCategoryId = contentCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedClickThroughRate")
    public String estimatedClickThroughRate;
    public InventoryItem withEstimatedClickThroughRate(String estimatedClickThroughRate) {
        this.estimatedClickThroughRate = estimatedClickThroughRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedConversionRate")
    public String estimatedConversionRate;
    public InventoryItem withEstimatedConversionRate(String estimatedConversionRate) {
        this.estimatedConversionRate = estimatedConversionRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public InventoryItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inPlan")
    public Boolean inPlan;
    public InventoryItem withInPlan(Boolean inPlan) {
        this.inPlan = inPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InventoryItem withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public InventoryItem withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InventoryItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negotiationChannelId")
    public String negotiationChannelId;
    public InventoryItem withNegotiationChannelId(String negotiationChannelId) {
        this.negotiationChannelId = negotiationChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public InventoryItem withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategyId")
    public String placementStrategyId;
    public InventoryItem withPlacementStrategyId(String placementStrategyId) {
        this.placementStrategyId = placementStrategyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public Pricing pricing;
    public InventoryItem withPricing(Pricing pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public InventoryItem withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rfpId")
    public String rfpId;
    public InventoryItem withRfpId(String rfpId) {
        this.rfpId = rfpId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;
    public InventoryItem withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public InventoryItem withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public InventoryItemTypeEnum type;
    public InventoryItem withType(InventoryItemTypeEnum type) {
        this.type = type;
        return this;
    }
}