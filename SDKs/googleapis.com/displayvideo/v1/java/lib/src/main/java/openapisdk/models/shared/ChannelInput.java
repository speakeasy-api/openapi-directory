package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelInput
 * A single channel. Channels are custom groups of related websites and apps.
**/
public class ChannelInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public ChannelInput withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ChannelInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public ChannelInput withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}