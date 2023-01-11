package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Channel
 * A single channel. Channels are custom groups of related websites and apps.
**/
public class Channel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Channel withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public Channel withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Channel withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Channel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativelyTargetedLineItemCount")
    public String negativelyTargetedLineItemCount;
    public Channel withNegativelyTargetedLineItemCount(String negativelyTargetedLineItemCount) {
        this.negativelyTargetedLineItemCount = negativelyTargetedLineItemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public Channel withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positivelyTargetedLineItemCount")
    public String positivelyTargetedLineItemCount;
    public Channel withPositivelyTargetedLineItemCount(String positivelyTargetedLineItemCount) {
        this.positivelyTargetedLineItemCount = positivelyTargetedLineItemCount;
        return this;
    }
}