package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuaranteedOrderInput
 * A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.
**/
public class GuaranteedOrderInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCampaignId")
    public String defaultCampaignId;
    public GuaranteedOrderInput withDefaultCampaignId(String defaultCampaignId) {
        this.defaultCampaignId = defaultCampaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GuaranteedOrderInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public GuaranteedOrderExchangeEnum exchange;
    public GuaranteedOrderInput withExchange(GuaranteedOrderExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherName")
    public String publisherName;
    public GuaranteedOrderInput withPublisherName(String publisherName) {
        this.publisherName = publisherName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAccessInherited")
    public Boolean readAccessInherited;
    public GuaranteedOrderInput withReadAccessInherited(Boolean readAccessInherited) {
        this.readAccessInherited = readAccessInherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAdvertiserIds")
    public String[] readAdvertiserIds;
    public GuaranteedOrderInput withReadAdvertiserIds(String[] readAdvertiserIds) {
        this.readAdvertiserIds = readAdvertiserIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readWriteAdvertiserId")
    public String readWriteAdvertiserId;
    public GuaranteedOrderInput withReadWriteAdvertiserId(String readWriteAdvertiserId) {
        this.readWriteAdvertiserId = readWriteAdvertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readWritePartnerId")
    public String readWritePartnerId;
    public GuaranteedOrderInput withReadWritePartnerId(String readWritePartnerId) {
        this.readWritePartnerId = readWritePartnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GuaranteedOrderStatusInput status;
    public GuaranteedOrderInput withStatus(GuaranteedOrderStatusInput status) {
        this.status = status;
        return this;
    }
}