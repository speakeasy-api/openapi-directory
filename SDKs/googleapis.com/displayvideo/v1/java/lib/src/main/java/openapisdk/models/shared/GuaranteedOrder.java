package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuaranteedOrder
 * A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.
**/
public class GuaranteedOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAdvertiserId")
    public String defaultAdvertiserId;
    public GuaranteedOrder withDefaultAdvertiserId(String defaultAdvertiserId) {
        this.defaultAdvertiserId = defaultAdvertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCampaignId")
    public String defaultCampaignId;
    public GuaranteedOrder withDefaultCampaignId(String defaultCampaignId) {
        this.defaultCampaignId = defaultCampaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GuaranteedOrder withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public GuaranteedOrderExchangeEnum exchange;
    public GuaranteedOrder withExchange(GuaranteedOrderExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedOrderId")
    public String guaranteedOrderId;
    public GuaranteedOrder withGuaranteedOrderId(String guaranteedOrderId) {
        this.guaranteedOrderId = guaranteedOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyGuaranteedOrderId")
    public String legacyGuaranteedOrderId;
    public GuaranteedOrder withLegacyGuaranteedOrderId(String legacyGuaranteedOrderId) {
        this.legacyGuaranteedOrderId = legacyGuaranteedOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GuaranteedOrder withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherName")
    public String publisherName;
    public GuaranteedOrder withPublisherName(String publisherName) {
        this.publisherName = publisherName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAccessInherited")
    public Boolean readAccessInherited;
    public GuaranteedOrder withReadAccessInherited(Boolean readAccessInherited) {
        this.readAccessInherited = readAccessInherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAdvertiserIds")
    public String[] readAdvertiserIds;
    public GuaranteedOrder withReadAdvertiserIds(String[] readAdvertiserIds) {
        this.readAdvertiserIds = readAdvertiserIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readWriteAdvertiserId")
    public String readWriteAdvertiserId;
    public GuaranteedOrder withReadWriteAdvertiserId(String readWriteAdvertiserId) {
        this.readWriteAdvertiserId = readWriteAdvertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readWritePartnerId")
    public String readWritePartnerId;
    public GuaranteedOrder withReadWritePartnerId(String readWritePartnerId) {
        this.readWritePartnerId = readWritePartnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GuaranteedOrderStatus status;
    public GuaranteedOrder withStatus(GuaranteedOrderStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GuaranteedOrder withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}